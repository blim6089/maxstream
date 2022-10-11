<template>
  <div>
    <div class="flex justify-center px-5 relative">
      <img
        src="~/assets/images/about/4.png"
        class="hidden lg:flex absolute left-0 top-80"
        alt=""
      />
      <div class="w-full max-w-[1440px] pt-40 relative">
        <div class="relative z-10">
          <div
            class="
              flex flex-col
              xl:flex-row
              items-center
              justify-between
              mb-[120px]
            "
          >
            <div class="w-full max-w-[453px] mb-10 xl:mb-0">
              <p class="font-ubuntu font-bold text-5xl xl:text-7xl mb-10">
                What is MaxStream?
              </p>
              <p class="text-lg text-[#383838]">
                MaxStream empowers creators to live stream with ease and
                stability.
              </p>
            </div>
            <img src="~/assets/images/about/1.png" alt="" />
          </div>
          <div
            class="
              flex flex-col
              xl:flex-row
              justify-center
              items-center
              gap-x-[100px]
              mb-16
              xl:mb-[200px]
              relative
            "
          >
            <img
              src="~/assets/images/about/5.png"
              class="absolute left-[140px] -bottom-12 xl:-bottom-32"
              alt=""
            />
            <img
              src="~/assets/images/about/2.png"
              class="mb-10 xl:mb-0"
              alt=""
            />
            <div class="w-full max-w-[357px]">
              <p class="text-[32px] font-ubuntu font-medium mb-6">
                How it started
              </p>
              <p class="text-base leading-6 text-[#383838]">
                Alexander Khuda founded MaxStream in 2018 with an obsession to
                help streamers get a wider audience.<br /><br />
                Focusing first on the gaming community, and building initially a
                free product, they soon saw the potential of how MaxStream could
                help in all kind of circumstances<br /><br />
                Over the next 5 years, Restream flourished into the robust
                ecosystem of tools it is today. Restream goes beyond streaming
                technology and into the complex infrastructure that continues to
                create millions of jobs for content creators worldwide.
              </p>
            </div>
          </div>
          <div
            class="
              flex flex-col
              xl:flex-row
              justify-center
              items-center
              gap-x-[100px]
              mb-[200px]
              relative
            "
          >
            <img
              src="~/assets/images/about/6.png"
              class="absolute left-16 xl:left-1/2 -bottom-28 translate-x-24"
              alt=""
            />
            <div class="w-full max-w-[357px]">
              <p class="text-[32px] font-ubuntu font-medium mb-6">
                Why MaxStream?
              </p>
              <p class="text-base leading-6 text-[#383838]">
                People are tired of picture-perfect content and overly rehearsed
                scripts. They want authentic stories and real human moments.<br /><br />
                Whether you're a creator, content marketer, business, or just
                someone with something to say, live streaming is an effective
                way to spread your message.
              </p>
            </div>
            <img src="~/assets/images/about/3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <ReadyStreamer />
  </div>
</template>

<script>
export default {
  name: "FeaturePage",
};
</script>
