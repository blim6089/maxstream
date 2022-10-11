<template>
  <div
    class="w-full px-4 rounded-xl"
    :class="{ 'bg-white': !isOpen, 'bg-[#FAFBFC]': isOpen }"
  >
    <div
      class="flex items-center justify-between cursor-pointer"
      @click="handleToggle"
    >
      <p class="py-4 font-ubuntu font-medium text-lg">{{ data.question }}</p>
      <div>
        <img
          src="~/assets/images/icons/arrow-up.svg"
          class="transform rotate-180 transition duration-500 ease-out"
          :class="{ 'rotate-0': isOpen }"
          alt=""
        />
      </div>
    </div>
    <div
      class="py-4 text-sm text-[#383838] border-t-2 border-t-[#FFBC10]"
      v-if="isOpen"
    >
      {{ data.answer }}
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleToggle: function () {
      this.isOpen = !this.isOpen;
    },
  },
  props: {
    data: Object,
  },
};
</script>