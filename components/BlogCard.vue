<template>
  <div
    class="
      rounded-2xl
      overflow-hidden
      bg-white
      border border-[#E9E9E9]
      cursor-pointer
    "
    :to="data.route"
    @click="handleRedirect(data.route)"
  >
    <div class="relative">
      <button
        class="
          absolute
          top-2
          left-2
          h-10
          border border-white
          rounded-xl
          bg-[#00000050]
          px-3
        "
      >
        <span class="text-sm text-white font-medium">{{ data.tag }}</span>
      </button>
      <img :src="data.banner" class="w-full" alt="" />
    </div>
    <div class="p-4 pt-3">
      <div class="flex items-center mb-2">
        <img :src="data.avatar" class="w-6 h-6 rounded-full mr-2" alt="" />
        <span class="font-medium text-sm text-[#383838]">{{ data.name }}</span>
      </div>
      <p class="font-medium text-sm text-[#222222] mb-3 leading-5">
        {{ data.description }}
      </p>
      <p class="text-xs text-[#A7A7A7]">
        {{ data.date }} • {{ data.time }} min read
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  methods: {
    handleRedirect: function (route) {
      this.$router.push(route);
    },
  },
};
</script>