import { ref } from 'vue';
import { supabase, supabaseAvailable } from '../supabase';

const STORAGE_KEY = 'fmj-likes';
const TABLE = 'project_likes';

// Normaliza el href para guardar siempre la misma clave en BD:
// "./apps/newbie/qr-code-component/" -> "newbie/qr-code-component/"
const normalizeHref = (href) =>
  String(href || '')
    .replace(/^\.\/apps\//, '')
    .replace(/^\.\//, '')
    .replace(/\/+$/, '') + '/';

const loadLocal = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
};

const persistLocal = (map) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    /* ignore */
  }
};

// local "ya di like" map por día (1 like por navegador por día)
const todayKey = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const loadDayLiked = () => {
  try {
    const map = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    return map[todayKey()] || {};
  } catch {
    return {};
  }
};

const persistDayLiked = (dayMap) => {
  try {
    const all = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    all[todayKey()] = dayMap;
    // limpiar días viejos (mantener solo últimos 3)
    const keys = Object.keys(all).sort().slice(-3);
    const trimmed = {};
    keys.forEach((k) => { trimmed[k] = all[k]; });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
  } catch {
    /* ignore */
  }
};

const localLiked = ref(loadDayLiked());

// conteos reales desde Supabase (cache reactiva)
const counts = ref({});

const fetchCount = async (rawHref) => {
  const href = normalizeHref(rawHref);
  if (!supabaseAvailable || !supabase) return null;
  const { data, error } = await supabase
    .from(TABLE)
    .select('likes_count')
    .eq('project_href', href)
    .maybeSingle();
  if (error) {
    console.error('[useLikes] fetchCount error:', JSON.stringify(error, null, 2), 'href=', href);
  } else {
    counts.value[href] = (data && typeof data.likes_count === 'number') ? data.likes_count : 0;
  }
  return counts.value[href];
};

export function useLikes() {
  const isLiked = (rawHref) => !!localLiked.value[normalizeHref(rawHref)];

  const toggleLike = async (rawHref) => {
    const href = normalizeHref(rawHref);
    const already = !!localLiked.value[href];

    // 1 like por navegador por día (evita inflación al refrescar)
    const next = { ...localLiked.value };
    if (already) delete next[href];
    else next[href] = true;
    localLiked.value = next;
    persistDayLiked(next);

    // reflejo optimista del conteo
    if (counts.value[href] == null) counts.value[href] = 0;
    counts.value[href] = Math.max(0, counts.value[href] + (already ? -1 : 1));

    if (!supabaseAvailable || !supabase) return;

    try {
      const delta = already ? -1 : 1;
      const { data, error } = await supabase.rpc('increment_likes', {
        target_href: href,
        delta,
      });
      if (error) {
        console.error('[useLikes] increment_likes error:', JSON.stringify(error, null, 2));
      } else if (typeof data === 'number') {
        counts.value[href] = Math.max(0, data);
      } else {
        await fetchCount(href);
      }
    } catch (e) {
      console.error('[useLikes] toggleLike exception:', e);
    }
  };

  const likeCount = (rawHref) => counts.value[normalizeHref(rawHref)] ?? 0;

  const topRank = (rawHref) => {
    const href = normalizeHref(rawHref);
    const idx = topLiked.value.findIndex((r) => r.href === href);
    return idx >= 0 ? idx : -1;
  };

  const initLikes = (rawHrefs = []) => {
    if (!supabaseAvailable || !supabase) return;
    rawHrefs.forEach((h) => fetchCount(h));
  };

  const topLiked = ref([]);

  const fetchTopLiked = async (limit = 3) => {
    if (!supabaseAvailable || !supabase) return [];
    const { data, error } = await supabase
      .from(TABLE)
      .select('project_href, likes_count')
      .order('likes_count', { ascending: false })
      .limit(limit);
    if (error) {
      console.error('[useLikes] fetchTopLiked error:', JSON.stringify(error, null, 2));
      return [];
    }
    topLiked.value = (data || [])
      .filter((r) => r.likes_count > 0)
      .map((r) => ({ href: r.project_href, likes: r.likes_count }));
    return topLiked.value;
  };

  return { isLiked, toggleLike, likeCount, topRank, initLikes, fetchTopLiked, topLiked, supabaseAvailable };
}
