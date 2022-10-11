<template>
  <div
    class="p-6 rounded-2xl mb-6"
    style="box-shadow: 0px 0px 8px rgba(66, 9, 160, 0.24)"
  >
    <p class="text-sm text-[#4E4E4E]">“{{ data.content }}”</p>
    <hr class="my-4" />
    <div class="flex">
      <img :src="data.avatar" class="flex-shrink-0" alt="" />
      <div class="ml-4">
        <p class="text-sm font-medium mb-1">{{ data.name }}</p>
        <p class="text-xs text-[#A7A7A7]">{{ data.role }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>