<template>
  <div
    class="profile-padding flex flex-col gap-8 rounded-2xl bg-neutral-800 md:grid md:grid-cols-[117px_1fr_1fr_1fr] md:grid-rows-[57px_1fr] md:gap-y-6">
    <div class="gap-profile flex md:col-span-4">
      <img
        src="../assets/images/github-octocat.svg"
        alt=""
        class="size-17.5 rounded-full bg-white md:size-29.25">

      <div class="flex w-full flex-col gap-1 md:flex-row md:justify-between">
        <div class="flex flex-col gap-0.5">
          <h2 class="text-[26px] leading-[1.2] font-bold">
            The Octocat
          </h2>
          <h3 class="text-[16px] leading-normal font-normal text-blue-300">
            @octocat
          </h3>
        </div>
        <span class="text-[15px] leading-normal">Joined 25 Jan 2011</span>
      </div>
    </div>

    <!-- *Profile Info -->
    <div class="flex flex-col gap-6 md:col-span-3 md:col-start-2">
      <span class="text-[15px] leading-normal text-white/70">This profile has no bio</span>

      <!-- *Stats Section -->
      <div class="flex flex-col gap-4 rounded-[10px] bg-neutral-900 p-4 md:flex-row md:px-8 md:justify-between">
        <!-- *Repos -->
        <div class="stats">
          <span class="text-[13px] leading-normal">Repos</span>
          <strong class="text-[22px] leading-[1.4]">8</strong>
        </div>
        <!-- *Followers -->
        <div class="stats">
          <span class="text-[13px] leading-normal">Followers</span>
          <strong class="text-[22px] leading-[1.4]">4832</strong>
        </div>
        <!-- *Following -->
        <div class="stats">
          <span class="text-[13px] leading-normal">Following</span>
          <strong class="text-[22px] leading-[1.4]">10</strong>
        </div>
      </div>

      <!-- *Links Section -->
      <ul class="flex flex-col gap-4 md:grid md:grid-cols-2">
        <li class="links">
          <span class="icon-links icon-location" />
          <a href="" />
        </li>
        <li class="links">
          <span class="icon-links icon-twitter" />
          <a href="" />
        </li>
        <li class="links">
          <span class="icon-links icon-website" />
          <a href="" />
        </li>
        <li class="links">
          <span class="icon-links icon-company" />
          <a href="" />
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
