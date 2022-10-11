<template>
  <div class="relative">
    <img
      src="~/assets/images/pricing/3.png"
      class="hidden lg:flex absolute top-16 right-0"
      alt=""
    />
    <div class="flex justify-center px-5 py-32 relative">
      <div class="w-full max-w-[full]">
        <img
          src="~/assets/images/pricing/1.png"
          class="absolute left-0 top-64"
          alt=""
        />
        <img
          src="~/assets/images/pricing/2.png"
          class="hidden xl:flex absolute right-40 top-40"
          alt=""
        />
        <p
          class="
            font-ubuntu font-bold
            text-4xl
            md:text-[40px]
            text-center
            mb-10
            md:mb-[75px]
          "
        >
          Take your livestream to the next stage
        </p>
        <div class="flex justify-center mb-9">
          <div class="bg-[#F2F4F8] rounded-3xl p-1">
            <button
              v-for="method in methods"
              @click="handleSelectMethod(method.id)"
              :key="method.id"
              class="w-[84px] h-8 rounded-full px-2"
              :class="{
                'font-medium text-[#222222] bg-white mx-0.5':
                  method.id === selectedMethod,
                'text-[#A7A7A7]': method.id !== selectedMethod,
              }"
              :style="{
                boxShadow:
                  method.id === selectedMethod
                    ? '0px 4px 4px -2px rgba(34, 34, 34, 0.2)'
                    : '',
              }"
            >
              {{ method.name }}
            </button>
          </div>
        </div>
        <div
          class="
            flex flex-col
            items-center
            lg:items-start
            justify-center
            lg:flex-row
            gap-x-4
          "
        >
          <div
            v-for="(subscription, index) in subscriptions"
            :key="index"
            class="w-full max-w-[400px] mb-10 lg:mb-0"
          >
            <Subscription :data="subscription" />
          </div>
        </div>
      </div>
    </div>
    <ReadyStreamer />
  </div>
</template>

<script>
export default {
  name: "PricingPage",
  data: function () {
    return {
      selectedMethod: "anually",
      methods: [
        { id: "monthly", name: "Monthly" },
        { id: "anually", name: "Anually" },
      ],
      subscriptions: [
        {
          name: "Basic",
          price: 0,
          selected: true,
          preferred: false,
          including: {
            title: "Including",
            items: [
              "Default watermark",
              "Schedule live stream",
              "Banners",
              "Streaming limits",
            ],
          },
        },
        {
          name: "Professional",
          price: 0,
          selected: false,
          preferred: true,
          bill: 204,
          including: {
            title: "Everything in Basic plan, plus",
            items: [
              "Your logo - no watermark",
              "Customed backgrounds",
              "Record up to 5 hours",
              "Multistream to 7 destinations",
              "Custom RTMP",
              "Disconnect protection",
              "15 days uploaded video storage",
              "Upload video files (limited to 500MB/file)",
            ],
          },
        },
        {
          name: "Enterprise",
          price: 44,
          selected: false,
          preferred: false,
          bill: 528,
          including: {
            title: "Everything in Professional plan, plus",
            items: [
              "Full HD resolution (1080p)",
              "Record up to 8 hours",
              "Multistream to 20 destinations",
              "30 days uploaded video storage",
              "Upload video files (limited to 1GB/file)",
              "Priority support",
            ],
          },
        },
      ],
    };
  },
  methods: {
    handleSelectMethod(id) {
      this.selectedMethod = id;
    },
  },
};
</script>
