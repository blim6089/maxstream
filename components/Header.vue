<template>
  <div
    class="
      fixed
      bg-white
      top-0
      left-0
      w-full
      h-20
      hidden
      lg:flex
      justify-center
      px-5
      z-50
    "
    style="box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.04)"
  >
    <div class="flex justify-between items-center max-w-[1440px] w-full">
      <div class="flex items-center">
        <NuxtLink to="/">
          <img src="~/assets/images/logo/logo.svg" class="mr-[52px]" alt="" />
        </NuxtLink>
        <ul class="flex items-center">
          <li
            class="list-none mx-5 text-sm"
            v-for="link in links"
            :key="link.route"
            :class="{
              'text-[#4209A0] font-semibold':
                link.route === `/${$nuxt.$route.name}`,
            }"
          >
            <NuxtLink :to="link.route">{{ link.name }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="text-sm text-[#383838]">
        <button class="h-10 px-6 mr-2">Log in</button>
        <button
          class="
            h-10
            px-6
            rounded-full
            border border-[#7A7A7A]
            hover:bg-gradient-to-b
            hover:to-[#721DFF]
            hover:from-[#8557D2]
            hover:text-white
            hover:border-[#8B4AF8]
          "
          :class="{
            'bg-gradient-to-b to-[#721DFF] from-[#8557D2] text-white border-[#8B4AF8]':
              !isTopPosition,
          }"
        >
          Get started
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isTopPosition: true,
      links: [
        {
          route: "/about",
          name: "About",
        },
        {
          route: "/feature",
          name: "Feature",
        },
        {
          route: "/pricing",
          name: "Pricing",
        },
        {
          route: "/blog",
          name: "Blog",
        },
      ],
    };
  },
  mounted() {
    let vm = this;
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 560) {
        vm.isTopPosition = false;
      } else {
        vm.isTopPosition = true;
      }
    });
  },
};
</script>