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
            v-for="item in items"
            :key="item.id"
            class="
              h-11
              mb-3
              px-4
              text-sm
              cursor-pointer
              flex
              items-center
              rounded-lg
            "
            :class="{
              'font-medium text-[#4209A0] bg-[#F9F7FD]':
                item.id === selectedTab,
            }"
            @click="handleSelectTab(item.id)"
          >
            {{ item.name }} ({{ item.count }})
          </li>
        </ul>
        <div class="w-full p-0 lg:pl-6">
          <div
            class="p-0 lg:p-6 bg-white rounded-lg shadow-none lg:shadow-card"
          >
            <p class="font-ubuntu text-[32px] font-medium mb-8 leading-9">
              <span class="text-[#A7A7A7]">Search result for:</span> stream
            </p>
            <div>
              <div
                v-for="(result, index) in results"
                :key="index"
                class="p-4 mb-4"
              >
                <p class="font-ubuntu font-medium text-lg mb-4">
                  {{ result.title }}
                </p>
                <p class="text-sm text-[#383838]" v-html="result.description" />
              </div>
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
      items: [
        { id: "all", name: "All", count: 11 },
        { id: "faq", name: "FAQ", count: 3 },
        { id: "get_started", name: "Getting started", count: 2 },
        { id: "streaming", name: "Streaming pre-recorded video", count: 2 },
        { id: "troubleshooting", name: "Technical troubleshooting", count: 1 },
        { id: "tools", name: "Tools & Features", count: 3 },
      ],
      results: [
        {
          title: "Is MaxStream free?",
          description:
            "Yes it’s free for core functions of the web. You can <span class='text-[#4209A0] font-medium'>stream</span> for free. No credit card required. No trial. No strings. It may have some limitations but it's great for beginers.",
        },
        {
          title: "How many hours can I stream at once with MaxStream?",
          description:
            "There is a 20 hours per month <span class='text-[#4209A0] font-medium'>streaming</span> limit on <span class='text-[#4209A0] font-medium'>MaxStream's</span> free tier.",
        },
        {
          title: "How to test a live stream?",
          description:
            "The easiest way to test live <span class='text-[#4209A0] font-medium'>streaming</span> is to do a Private live <span class='text-[#4209A0] font-medium'>stream</span> to your Youtube channel.",
        },
        {
          title: "How do I stream privately to Youtube?",
          description:
            "A Private Youtube <span class='text-[#4209A0] font-medium'>stream</span> is a great way to <span class='text-[#4209A0] font-medium'>stream</span> to specific people! Private Youtube <span class='text-[#4209A0] font-medium'>streams</span> are easy to set up, and allow you to share the <span class='text-[#4209A0] font-medium'>stream</span> via email to your viewers.<br /><br />Note: All viewers will need a Youtube account to view a private <span class='text-[#4209A0] font-medium'>stream.</span>",
        },
        {
          title: "Does MaxStream have Stream Analytics?",
          description:
            "<span class='text-[#4209A0] font-medium'>MaxStream</span> does not currently track or display any analytics on <span class='text-[#4209A0] font-medium'>streams</span> aside from the current viewer count.",
        },
        {
          title: "Hotkeys on MaxStream",
          description:
            'Hotkeys let you easily navigate your live <span class="text-[#4209A0] font-medium">streaming</span> with your keyboard, instead of your mouse. This allows you to "short-cut" common actions during your <span class="text-[#4209A0] font-medium">stream</span> to produce professional <span class="text-[#4209A0] font-medium">streams.</span> ',
        },
        {
          title: "What bitrate does MaxStream use for live streaming?",
          description:
            "The bitrate for live <span class='text-[#4209A0] font-medium'>streaming</span> that we use for <span class='text-[#4209A0] font-medium'>MaxStream</span> is defined below:<br /><br />1080p HD, 4500kbps video bitrate<br />720p HD, 3000kbps video bitrate",
        },
        {
          title: "Can I stream to Tiktok with MaxStream?",
          description:
            "As soon as Tiktok allows live <span class='text-[#4209A0] font-medium'>streaming</span> from third-party tools, we will add it as a supported destination! ",
        },
        {
          title: "Can I stream to Instagram with MaxStream?",
          description:
            "Instagram does not officially support <span class='text-[#4209A0] font-medium'>streaming</span> outside of their own mobile app.",
        },
        {
          title: "My stream is blurry and/or laggy",
          description:
            "This is almost always due to the quality of your internet connection.<br /><br />If you are using WiFi, try plugging directly into the router. If that isn’t possible, try to improve your signal by moving closer to the router. Also, make sure that other people you share the internet connection with aren’t <span class='text-[#4209A0] font-medium'>streaming</span> videos or doing other high bandwidth activities.<br /><br />If you're still having issues, try restarting your computer and make sure that you don't have other heavy applications running while you are <span class='text-[#4209A0] font-medium'>streaming</span>.<br /><br />In rare cases, an old router might be causing issues -- if you are hardwired and continue to have issues, try restarting or replacing the router. Before replacing the router, you should contact your ISP and ask them if there are any issues in your area.",
        },
      ],
    };
  },
  methods: {
    handleSelectTab(id) {
      this.selectedTab = id;
    },
  },
};
</script>