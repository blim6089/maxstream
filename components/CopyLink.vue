<template>
  <div class="relative">
    <button
      @click="handleToggle"
      class="
        w-10
        h-10
        rounded-full
        p-0
        flex
        items-center
        justify-center
        bg-[#999999]
        transition
      "
      :class="data.hoverColor"
    >
      <img :src="data.avatar" alt="" />
    </button>
    <div
      class="
        absolute
        top-0
        flex
        items-center
        top-1/2
        -left-3
        -translate-x-full -translate-y-1/2
        transition
      "
      :class="{ 'opacity-0': !isOpen, 'opacity-100': isOpen }"
    >
      <div
        class="flex text-xs text-white p-2.5 bg-[#280560] rounded-lg"
        style="
          box-shadow: 0px 1px 2px rgba(34, 34, 34, 0.1),
            0px 4px 8px rgba(34, 34, 34, 0.15);
        "
      >
        Link&nbsp;copied
      </div>
      <img src="~/assets/images/blog/arrow.png" class="ml-[-2px]" alt="" />
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
  watch: {
    isOpen: function () {
      let vm = this;
      if (this.isOpen) {
        setTimeout(function () {
          vm.isOpen = false;
        }, 3000);
      }
    },
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