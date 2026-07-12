<template>
  <div class="profile-padding flex flex-col gap-8 rounded-2xl bg-neutral-800 ">
    <div class="flex gap-5 ">
      <img
        src="../assets/images/github-octocat.svg"
        alt=""
        class="size-17.5 rounded-full bg-white md:size-[117px]" />

      <div class="flex flex-col gap-1 ">
        <div class="flex flex-col gap-0.5">
          <h2 class="text-[26px] leading-[1.2] font-bold">The Octocat</h2>
          <h3 class="text-[16px] leading-normal font-normal text-blue-300">@octocat</h3>
        </div>
        <span class="leading-normal text-[15px]">Joined 25 Jan 2011</span>
      </div>
    </div>

    <!-- *Profile Info -->
    <div class="flex flex-col gap-6 ">
      <span>This profile has no bio</span>

      <!-- *Stats Section -->
      <div class="flex flex-col gap-4 bg-neutral-900 rounded-[10px] p-4 ">
        <!-- *Repos -->
        <div class="stats">
          <span>Repos</span>
          <strong>8</strong>
        </div>
        <!-- *Followers -->
        <div class="stats">
          <span>Followers</span>
          <strong>4832</strong>
        </div>
        <!-- *Following -->
        <div class="stats">
          <span>Following</span>
          <strong>10</strong>
        </div>
      </div>

      <!-- *Links Section -->
      <ul class="flex flex-col gap-4 ">
        <li class="links">
          <span class="icon-links icon-location"></span>
          <a href=""></a>
        </li>
        <li class="links">
          <span class="icon-links icon-twitter"></span>
          <a href=""></a>
        </li>
        <li class="links">
          <span class="icon-links icon-website"></span>
          <a href=""></a>
        </li>
        <li class="links">
          <span class="icon-links icon-company"></span>
          <a href=""></a>
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
.stats{
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.links{
  display: flex;
  gap: 16px;
}
.icon-links{
  width: 20px;
  height: 20px;
  display: inline-block;
  background-color: white;
  transition: all 0.3s ease-in-out;
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
}
.icon-location{
  mask-image: url('../assets/images/icon-location.svg');
}
.icon-twitter{
  mask-image: url('../assets/images/icon-twitter.svg');
}
.icon-website{
  mask-image: url('../assets/images/icon-website.svg');
}
.icon-company{
  mask-image: url('../assets/images/icon-company.svg');
}

</style>
