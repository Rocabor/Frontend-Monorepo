import { ref } from 'vue';
import { supabase, supabaseAvailable } from '../supabase';

const TABLE = 'project_views';

// "./apps/newbie/qr-code-component/" -> "newbie/qr-code-component/"
const normalizeHref = (href) =>
  String(href || '')
    .replace(/^\.\/apps\//, '')
    .replace(/^\.\//, '')
    .replace(/\/+$/, '') + '/';

const counts = ref({});
const loading = ref(false);

const fetchCount = async (rawHref) => {
  const href = normalizeHref(rawHref);
  if (!supabaseAvailable || !supabase) return null;
  const { data, error } = await supabase
    .from(TABLE)
    .select('views_count')
    .eq('project_href', href)
    .maybeSingle();
  if (error) {
    console.error('[useViews] fetchCount error:', JSON.stringify(error, null, 2), 'href=', href);
  } else {
    counts.value[href] = (data && typeof data.views_count === 'number') ? data.views_count : 0;
  }
  return counts.value[href];
};

const todayKey = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const viewedToday = () => {
  try {
    return JSON.parse(localStorage.getItem('fmj-views-day') || '{}');
  } catch {
    return {};
  }
};

export function useViews() {
  const viewCount = (rawHref) => counts.value[normalizeHref(rawHref)] ?? 0;

  const trackView = async (rawHref) => {
    const href = normalizeHref(rawHref);
    if (counts.value[href] == null) counts.value[href] = 0;

    // 1 conteo por navegador por día (evita inflación al refrescar)
    const day = todayKey();
    const seen = viewedToday();
    if (seen[day] && seen[day][href]) return;
    seen[day] = seen[day] || {};
    seen[day][href] = true;
    try { localStorage.setItem('fmj-views-day', JSON.stringify(seen)); } catch {}

    counts.value[href] += 1; // optimista

    if (!supabaseAvailable || !supabase) return;
    try {
      const { data, error } = await supabase.rpc('increment_views', { target_href: href, delta: 1 });
      if (error) console.error('[useViews] increment_views error:', JSON.stringify(error, null, 2));
      else if (typeof data === 'number') counts.value[href] = Math.max(0, data);
    } catch (e) {
      console.error('[useViews] trackView exception:', e);
    }
  };

  const initViews = (rawHrefs = []) => {
    if (!supabaseAvailable || !supabase) return;
    loading.value = true;
    Promise.all(rawHrefs.map((h) => fetchCount(h))).finally(() => {
      loading.value = false;
    });
  };

  const topViewed = ref([]);

  const fetchTopViewed = async (limit = 3) => {
    if (!supabaseAvailable || !supabase) return [];
    const { data, error } = await supabase
      .from(TABLE)
      .select('project_href, views_count')
      .gt('views_count', 0)
      .order('views_count', { ascending: false })
      .limit(limit);
    if (error) {
      console.error('[useViews] fetchTopViewed error:', JSON.stringify(error, null, 2));
      return [];
    }
    topViewed.value = (data || [])
      .map((r) => ({ href: r.project_href, views: r.views_count }));
    return topViewed.value;
  };

  const totalViews = ref(0);

  const fetchTotalViews = async () => {
    if (!supabaseAvailable || !supabase) return 0;
    const { data, error } = await supabase
      .from(TABLE)
      .select('views_count');
    if (error) {
      console.error('[useViews] fetchTotalViews error:', JSON.stringify(error, null, 2));
      return 0;
    }
    totalViews.value = (data || []).reduce((acc, r) => acc + (r.views_count || 0), 0);
    return totalViews.value;
  };

  return { viewCount, trackView, initViews, fetchTopViewed, topViewed, fetchTotalViews, totalViews, loading };
}
