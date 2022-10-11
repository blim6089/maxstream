<template>
  <div class="relative flex justify-center px-5">
    <img
      src="~/assets/images/ready-streamer/banner.png"
      class="w-full absolute top-0 left-0"
      alt=""
    />
    <div
      class="
        w-full
        max-w-[1440px]
        flex flex-col
        xl:flex-row
        items-center
        xl:items-start
        justify-between
        relative
        z-10
        md:pt-4 md:pb-40
        py-10
      "
    >
      <div class="mt-20 xl:mt-[200px] mb-10 xl:mb-0">
        <p class="font-ubuntu text-2xl md:text-[40px] font-bold mb-5 md:mb-10">
          Ready to be a Streamer?
        </p>
        <div class="flex flex-col sm:flex-row">
          <input
            type="text"
            class="
              w-80
              h-12
              rounded-full
              border border-[#D3D3D3]
              px-6
              text-sm
              mb-2
              md:mb-0
            "
            placeholder="Enter your email"
          />
          <button
            class="
              h-12
              rounded-full
              px-6
              bg-gradient-to-t
              from-[#721DFF]
              to-[#8557D2]
              ml-0
              md:ml-2
            "
          >
            <span class="text-white text-sm">Get started</span>
          </button>
        </div>
      </div>
      <img src="~/assets/images/ready-streamer/avatar.png" alt="" />
    </div>
  </div>
</template>