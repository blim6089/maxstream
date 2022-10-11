<template>
  <div class="text-[#222]">
    <Header />
    <MobileHeader />
    <Nuxt />
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

<style scoped>
body {
  font-family: "Lato", sans-serif;
}
</style>