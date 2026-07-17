import { ref } from 'vue';

const STORAGE_KEY = 'fmj-likes';

const load = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
};

// Singleton shared state
const liked = ref(load());

const persist = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(liked.value));
  } catch {
    /* ignore */
  }
};

// Base seed per project so the counter looks populated before any local action.
const baseSeed = (href) => {
  let h = 0;
  for (let i = 0; i < href.length; i++) h = (h * 31 + href.charCodeAt(i)) >>> 0;
  return 8 + (h % 240); // 8..247
};

export function useLikes() {
  const isLiked = (href) => !!liked.value[href];

  const toggleLike = (href) => {
    if (liked.value[href]) {
      delete liked.value[href];
    } else {
      liked.value[href] = true;
    }
    liked.value = { ...liked.value };
    persist();
  };

  const likeCount = (href) => baseSeed(href) + (liked.value[href] ? 1 : 0);

  return { isLiked, toggleLike, likeCount };
}
