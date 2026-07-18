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

// local "ya di like" map (por navegador)
const localLiked = ref(loadLocal());

// conteos reales desde Supabase (cache reactiva)
const counts = ref({});

const fetchCount = async (rawHref) => {
  const href = normalizeHref(rawHref);
  if (!supabaseAvailable || !supabase) return null;
  const { count, error } = await supabase
    .from(TABLE)
    .select('project_href', { count: 'exact', head: true })
    .eq('project_href', href);
  if (error) {
    console.error('[useLikes] fetchCount error:', JSON.stringify(error, null, 2), 'href=', href);
  } else {
    counts.value[href] = count || 0;
  }
  return counts.value[href];
};

export function useLikes() {
  const isLiked = (rawHref) => !!localLiked.value[normalizeHref(rawHref)];

  const toggleLike = async (rawHref) => {
    const href = normalizeHref(rawHref);
    const already = !!localLiked.value[href];

    // actualizar estado local de inmediato
    const next = { ...localLiked.value };
    if (already) delete next[href];
    else next[href] = true;
    localLiked.value = next;
    persistLocal(next);

    // reflejo optimista del conteo
    if (counts.value[href] == null) counts.value[href] = 0;
    counts.value[href] = Math.max(0, counts.value[href] + (already ? -1 : 1));

    if (!supabaseAvailable || !supabase) return;

    try {
      if (already) {
        const r = await supabase.from(TABLE).delete().eq('project_href', href).limit(1);
        if (r.error) console.error('[useLikes] delete error:', JSON.stringify(r.error, null, 2));
      } else {
        const r = await supabase.from(TABLE).insert({ project_href: href });
        if (r.error) console.error('[useLikes] insert error:', JSON.stringify(r.error, null, 2));
      }
      await fetchCount(href);
    } catch (e) {
      console.error('[useLikes] toggleLike exception:', e);
    }
  };

  const likeCount = (rawHref) => counts.value[normalizeHref(rawHref)] ?? 0;

  const initLikes = (rawHrefs = []) => {
    if (!supabaseAvailable || !supabase) return;
    rawHrefs.forEach((h) => fetchCount(h));
  };

  return { isLiked, toggleLike, likeCount, initLikes, supabaseAvailable };
}
