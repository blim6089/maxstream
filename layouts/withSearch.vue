<template>
  <div class="text-[#222] relative">
    <img
      src="~/assets/images/blog/dots.png"
      class="hidden lg:block absolute top-[640px] left-0"
      alt=""
    />
    <img
      src="~/assets/images/blog/circle-half.png"
      class="hidden lg:block absolute top-[640px] right-0"
      alt=""
    />
    <Header />
    <MobileHeader />
    <div class="pt-20 lg:pt-[100px] xl:pt-[120px] px-0 lg:px-5 xl:px-10">
      <SearchBanner />
    </div>
    <div class="flex justify-center px-5 relative z-10">
      <div class="w-full max-w-[1440px] flex py-10 lg:py-[120px]">
        <Sidebar />
        <div class="w-full pl-0 lg:pl-6">
          <Nuxt />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "MaxStream",
    };
  },
};
</script>