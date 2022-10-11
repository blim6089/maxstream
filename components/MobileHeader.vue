<template>
  <div
    style="box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.04)"
    class="
      fixed
      bg-white
      top-0
      left-0
      w-full
      h-20
      flex
      lg:hidden
      justify-between
      items-center
      px-5
      lg:px-20
      xl:px-40
      z-50
    "
  >
    <div class="flex items-center justify-between w-full">
      <NuxtLink to="/">
        <img src="~/assets/images/logo/logo.svg" class="mr-[52px]" alt="" />
      </NuxtLink>
      <button class="w-8 h-8 p-1 outline-none" @click="handleToggle">
        <img src="~/assets/images/icons/menu.png" v-if="!isOpen" alt="" />
        <img src="~/assets/images/icons/close.png" v-else alt="" />
      </button>
    </div>
    <div
      v-if="isOpen"
      class="
        absolute
        bg-white
        w-full
        left-0
        top-20
        flex flex-col
        items-center
        py-5
      "
    >
      <ul class="flex flex-col items-center">
        <li
          class="h-10 list-none mx-5 text-sm flex items-center"
          v-for="link in links"
          :key="link.route"
          @click="handleClose"
          :class="{
            'text-[#4209A0] font-semibold':
              link.route === `/${$nuxt.$route.name}`,
          }"
        >
          <NuxtLink :to="link.route">{{ link.name }}</NuxtLink>
        </li>
      </ul>
      <div class="text-sm text-[#383838] flex flex-col items-center">
        <button @click="handleClose" class="h-10 px-6">Log in</button>
        <button
          @click="handleClose"
          class="h-10 px-6 rounded-full border border-[#7A7A7A]"
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
      isOpen: false,
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
  methods: {
    handleToggle: function () {
      this.isOpen = !this.isOpen;
    },
    handleClose: function () {
      this.isOpen = false;
    },
  },
};
</script>