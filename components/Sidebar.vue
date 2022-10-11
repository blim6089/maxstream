<template>
  <ul
    class="
      hidden
      lg:flex
      flex-col flex-shrink-0
      m-0
      p-0
      w-full
      max-w-[262px]
      bg-white
    "
  >
    <li
      :key="index"
      v-for="(item, index) in items"
      class="h-11 mb-3 px-4 flex items-center rounded-lg"
      :class="{
        'font-medium text-[#4209A0] bg-[#F9F7FD]':
          item.route === `/${$nuxt.$route.name}`,
      }"
    >
      <NuxtLink :to="item.route" class="text-sm">{{ item.name }}</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  data: function () {
    return {
      items: [
        { name: "FAQ", route: "/faq" },
        { name: "Getting started", route: "/" },
        { name: "Streaming pre-recorded video", route: "/" },
        { name: "Technical troubleshooting", route: "/" },
        { name: "Account", route: "/" },
        { name: "Billing & Subscriptions", route: "/" },
        { name: "Tools & Features", route: "/" },
        { name: "Terms of Service", route: "/terms" },
        { name: "Privacy Policy", route: "/policy" },
      ],
    };
  },
};
</script>