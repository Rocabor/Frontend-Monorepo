<template>
  <section id="team" class=" mx-auto pt-12 md:pt-[82px] max-w-[1187px]">

    <div class="flex flex-col xl:flex-row items-center gap-12 md:gap-[72px] xl:gap-14">

      <div class="w-full md:w-[615px]">

        <img src="../assets/images/illustration-stay-productive.png" alt="Stay productive" class="w-full" />
      </div>

      <div class="w-full xl:w-[516px] text-left">

        <h2 class="text-preset-5 mb-4 md:mb-6 xl:mb-8">
          Stay productive,<br class="hidden xl:block"> wherever you are
        </h2>

        <p class="text-preset-6 mb-4 ">
          Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
        </p>

        <p class="text-preset-6 mb-4 md:mb-6 ">
          Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
        </p>

        <a href="#" class="inline-flex items-center gap-2 text-blue-300 border-b border-blue-300 text-preset-6 hover:text-white hover:border-white transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white group w-fit">
          See how Fylo works
          <svg width="16" height="16" viewBox="0 0 16 16" class="w-4 h-4 transition-all group-hover:translate-x-1">
            <defs>
              <mask id="arrowMask">
                <rect width="16" height="16" fill="white" />
                <path d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z" fill="black" />
              </mask>
            </defs>
            <circle cx="8" cy="8" r="6" fill="currentColor" mask="url(#arrowMask)" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>