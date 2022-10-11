<template>
  <div class="flex justify-center text-[#222] px-0 lg:px-5 xl:px-10 relative">
    <img
      src="~/assets/images/blog/dots.png"
      class="hidden lg:block absolute top-[850px] left-0"
      alt=""
    />
    <img
      src="~/assets/images/blog/circle-half.png"
      class="hidden lg:block absolute top-[640px] right-0"
      alt=""
    />
    <div class="w-full max-w-[1440px] pt-20 lg:pt-[100px] xl:pt-[120px]">
      <SearchBanner />

      <div
        class="
          flex
          px-5
          pb-10
          pt-[60px]
          lg:pt-[120px] lg:pb-[120px]
          relative
          z-10
        "
      >
        <ul class="hidden lg:block flex-shrink-0 m-0 p-0 w-full max-w-[270px]">
          <li
            class="
              h-11
              mb-3
              px-4
              text-sm
              cursor-pointer
              font-medium
              text-[#4209A0]
              bg-[#F9F7FD]
              flex items-center
              rounded-lg
            "
          >
            All (0)
          </li>
        </ul>
        <div class="w-full p-0 lg:pl-6">
          <div
            class="p-0 lg:p-6 bg-white rounded-lg shadow-none lg:shadow-card"
          >
            <p class="font-ubuntu text-[32px] font-medium mb-8 leading-9">
              <span class="text-[#A7A7A7]">Search result for:</span>
              {{ keyword }}
            </p>
            <div class="text-sm text-[#383838]">
              There is no result for
              <span class="font-medium text-[#411688]">“hola”</span>. Please try
              searching another keyword
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      selectedTab: "all",
      keyword: "hola",
    };
  },
  methods: {
    handleSelectTab(id) {
      this.selectedTab = id;
    },
  },
};
</script>