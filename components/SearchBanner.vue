<template>
  <div
    class="
      px-5
      pt-20
      py-20
      lg:pb-[150px]
      relative
      rounded-none
      bg-[#F8F8F8]
      rounded-none
      lg:rounded-[40px]
    "
  >
    <img
      src="~/assets/images/search/1.png"
      class="hidden lg:block absolute left-[98px] bottom-[-60px]"
      alt=""
    />
    <img
      src="~/assets/images/search/2.png"
      class="hidden lg:block absolute top-[46px] left-[112px]"
      alt=""
    />
    <img
      src="~/assets/images/search/3.png"
      class="hidden lg:block absolute top-0 right-0"
      alt=""
    />
    <div class="relative z-10 flex flex-col items-center">
      <p class="text-center text-5xl xl:text-7xl font-ubuntu font-bold mb-10">
        Hello, how can we help
      </p>
      <div
        class="
          w-full
          max-w-[480px]
          h-12
          rounded-full
          p-1
          relative
          bg-white
          overflow-hidden
        "
        style="box-shadow: 0px 4px 8px rgba(34, 34, 34, 0.08)"
      >
        <input
          type="text"
          class="w-full h-full px-5 outline-none"
          placeholder="Ask us everything"
          @keydown="handleRedirect"
        />
        <button
          @click="handleRedirect"
          class="
            absolute
            top-1
            right-1
            flex
            items-center
            justify-center
            w-10
            h-10
            rounded-full
            bg-gradient-to-b
            from-[#8557D2]
            to-[#721DFF]
          "
        >
          <img src="~/assets/images/icons/search.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleRedirect: function (e) {
      if (e.type === "keydown" && e.keyCode === 13)
        this.$router.push("/search");
      if (e.type === "click") this.$router.push("/search");
    },
  },
};
</script>