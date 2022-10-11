<template>
  <div
    :class="{
      'border-[4px] border-[#F37148]': data.preferred,
      'border-[#E9E9E9]': !data.preferred,
    }"
    class="flex flex-col items-center rounded-3xl p-6 border relative bg-white"
  >
    <img
      src="~/assets/images/pricing/star.png"
      class="absolute -top-1 left-0"
      alt=""
      v-if="data.preferred"
    />
    <p class="font-ubuntu font-medium text-[#A7A7A7] mb-3">{{ data.name }}</p>
    <p class="font-medium mb-1" :class="{ 'mb-[62px]': data.name === 'Basic' }">
      <span class="text-[40px] leading-[45px] font-bold">
        ${{ data.price }}
      </span>
      <span class="text-sm">/month</span>
    </p>
    <p v-if="data.bill" class="text-xs text-[#383838] mb-10">
      Billed as ${{ data.bill }} anually
    </p>
    <button
      class="w-[200px] h-14 rounded-full mb-16 text-sm"
      :class="{
        'border border-[#7A7A7A] text-[#383838] opacity-50': data.selected,
        'border border-[#7A7A7A] text-[#222222':
          !data.preferred && !data.selected,
        'bg-gradient-to-b from-[#F3D689] to-[#FFBC10] text-[#623B00]':
          data.preferred,
      }"
    >
      {{ data.selected ? "Current plan" : "Upgrade now" }}
    </button>
    <div class="w-full">
      <p class="text-sm font-medium mb-1">{{ data.including.title }}</p>
      <ul>
        <li
          v-for="(item, index) in data.including.items"
          :key="index"
          class="
            flex
            items-center
            py-3
            border-b border-b-[#F8F8F8]
            last:border-b-transparent
          "
        >
          <img
            src="~/assets/images/icons/check-circle-green.svg"
            class="mr-2.5"
            alt=""
          />
          <span class="text-sm text-[#414042]">{{ item }}</span>
        </li>
      </ul>
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