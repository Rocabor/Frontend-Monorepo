<script setup>
import imgGithub from '../assets/images/github-octocat.svg';
// Definimos la prop que viene del padre
const props = defineProps({
  user: {
    type: Object,
    default: null, // Por defecto no hay usuario
  },
});
</script>

<template>
  <div
    class="profile-padding flex flex-col gap-8 rounded-2xl bg-neutral-800 md:grid md:grid-cols-[117px_1fr_1fr_1fr] md:grid-rows-[57px_1fr] md:gap-y-6 shadow-shadow-dark mb-2">
    <div class="gap-profile flex md:col-span-4">
      <img
        :src="user?.avatar_url || imgGithub"
        alt=""
        class="size-[70px] rounded-full bg-white md:size-[117px]" />

      <div class="flex w-full flex-col gap-1 md:flex-row md:justify-between">
        <div class="flex flex-col gap-0.5">
          <h2 class="text-[26px] leading-[1.2] font-bold">
            {{ user?.login || 'The Octocat' }}
          </h2>
          <h3 class="text-[16px] leading-normal font-normal text-blue-300">
            {{ user?.login ? '@' + user.login : '@octocat' }}
          </h3>
        </div>
        <span class="text-[15px] leading-normal">
          Joined
          {{
            user?.created_at
              ? new Date(user.created_at).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })
              : '25 Jan 2011'
          }}
        </span>
      </div>
    </div>

    <!-- *Profile Info -->
    <div class="flex flex-col gap-6 md:col-span-3 md:col-start-2">
      <span class="text-[15px] leading-normal text-white/70">{{ user?.bio || 'This profile has no bio' }}</span>

      <!-- *Stats Section -->
      <div class="flex flex-col gap-4 rounded-[10px] bg-neutral-900 p-4 md:flex-row md:justify-between md:px-8">
        <!-- *Repos -->
        <div class="stats">
          <span class="text-[13px] leading-normal">Repos</span>
          <strong class="text-[22px] leading-[1.4]">{{ user?.public_repos || 0 }}</strong>
        </div>
        <!-- *Followers -->
        <div class="stats">
          <span class="text-[13px] leading-normal">Followers</span>
          <strong class="text-[22px] leading-[1.4]">{{ user?.followers || 0 }}</strong>
        </div>
        <!-- *Following -->
        <div class="stats">
          <span class="text-[13px] leading-normal">Following</span>
          <strong class="text-[22px] leading-[1.4]">{{ user?.following || 0 }}</strong>
        </div>
      </div>

      <!-- *Links Section -->
      <ul class="flex flex-col gap-4 md:grid md:grid-cols-2">
        <!-- Locación -->
        <li
          class="flex items-center gap-3 text-[15px]"
          :class="{ 'opacity-50': !user?.location }">
          <span
            class="icon-links icon-location shrink-0"
            aria-hidden="true" />
          <span class="truncate">{{ user?.location || 'Not Available' }}</span>
        </li>

        <!-- Twitter -->
        <li
          class="flex items-center gap-3 text-[15px]"
          :class="{ 'opacity-50': !user?.twitter_username }">
          <span
            class="icon-links icon-twitter shrink-0"
            aria-hidden="true" />
          <a
            v-if="user?.twitter_username"
            :href="`https://x.com{user.twitter_username}`"
            target="_blank"
            rel="noopener noreferrer"
            class="truncate hover:underline">
            {{ '@' + user.twitter_username }}
          </a>
          <span
            v-else
            class="truncate">
            Not Available
          </span>
        </li>

        <!-- Sitio Web / Blog -->
        <li
          class="flex items-center gap-3 text-[15px]"
          :class="{ 'opacity-50': !user?.blog }">
          <span
            class="icon-links icon-website shrink-0"
            aria-hidden="true" />
          <a
            v-if="user?.blog"
            :href="user.blog"
            target="_blank"
            rel="noopener noreferrer"
            class="truncate hover:underline">
            {{ user.blog }}
          </a>
          <span
            v-else
            class="truncate">
            Not Available
          </span>
        </li>

        <!-- Compañía -->
        <li
          class="flex items-center gap-3 text-[15px]"
          :class="{ 'opacity-50': !user?.company }">
          <span
            class="icon-links icon-company shrink-0"
            aria-hidden="true" />
          <span class="truncate">{{ user?.company || 'Not Available' }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.profile-padding {
  padding-inline: clamp(24px, calc(1.099px + 6.107vw), 48px);
  padding-block: clamp(32px, calc(16.733px + 4.071vw), 48px);
}
.stats {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.links {
  display: flex;
  gap: 16px;
}
.icon-links {
  width: 20px;
  height: 20px;
  display: inline-block;
  background-color: white;
  transition: all 0.3s ease-in-out;
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
}
.icon-location {
  mask-image: url('../assets/images/icon-location.svg');
}
.icon-twitter {
  mask-image: url('../assets/images/icon-twitter.svg');
}
.icon-website {
  mask-image: url('../assets/images/icon-website.svg');
}
.icon-company {
  mask-image: url('../assets/images/icon-company.svg');
}
</style>
