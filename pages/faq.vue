<template>
  <div class="p-0 lg:p-6 bg-white rounded-lg shadow-none lg:shadow-card">
    <p class="font-ubuntu text-[32px] font-medium mb-8 leading-9">FAQ</p>
    <div>
      <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
        <Collapse :data="faq" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "withSearch",
  data: function () {
    return {
      faqs: [
        {
          question: "Is MaxStream free?",
          answer:
            "Is MaxStream free? Yes it’s free for core functions of the web. You can stream for free. No credit card required. No trial. No strings. It may have some limitations but it's great for beginers.",
        },
        {
          question: "What forms of payment do you accept?",
          answer:
            "Is MaxStream free? Yes it’s free for core functions of the web. You can stream for free. No credit card required. No trial. No strings. It may have some limitations but it's great for beginers.",
        },
        {
          question: "Can I cancel my subscription?",
          answer:
            "Is MaxStream free? Yes it’s free for core functions of the web. You can stream for free. No credit card required. No trial. No strings. It may have some limitations but it's great for beginers.",
        },
        {
          question: "How can I change my subscription?",
          answer:
            "Is MaxStream free? Yes it’s free for core functions of the web. You can stream for free. No credit card required. No trial. No strings. It may have some limitations but it's great for beginers.",
        },
        {
          question: "How to use a DSLR/Dedicated Camera with MaxStream?",
          answer:
            "Is MaxStream free? Yes it’s free for core functions of the web. You can stream for free. No credit card required. No trial. No strings. It may have some limitations but it's great for beginers.",
        },
        {
          question: "Does MaxStream have Stream Analytics?",
          answer:
            "Is MaxStream free? Yes it’s free for core functions of the web. You can stream for free. No credit card required. No trial. No strings. It may have some limitations but it's great for beginers.",
        },
        {
          question: "How do I check the remaining time on my subscription?",
          answer:
            "Is MaxStream free? Yes it’s free for core functions of the web. You can stream for free. No credit card required. No trial. No strings. It may have some limitations but it's great for beginers.",
        },
        {
          question: "MaxStream partners?",
          answer:
            "Is MaxStream free? Yes it’s free for core functions of the web. You can stream for free. No credit card required. No trial. No strings. It may have some limitations but it's great for beginers.",
        },
        {
          question: "Does MaxStream have caption?",
          answer:
            "Is MaxStream free? Yes it’s free for core functions of the web. You can stream for free. No credit card required. No trial. No strings. It may have some limitations but it's great for beginers.",
        },
        {
          question: "How do I change my email address in my MaxStream account?",
          answer:
            "Is MaxStream free? Yes it’s free for core functions of the web. You can stream for free. No credit card required. No trial. No strings. It may have some limitations but it's great for beginers.",
        },
        {
          question: "What bitrate does MaxStream use for live streaming?",
          answer:
            "Is MaxStream free? Yes it’s free for core functions of the web. You can stream for free. No credit card required. No trial. No strings. It may have some limitations but it's great for beginers.",
        },
        {
          question: "Sizes for logos, overlays, backgrounds and video clips",
          answer:
            "Is MaxStream free? Yes it’s free for core functions of the web. You can stream for free. No credit card required. No trial. No strings. It may have some limitations but it's great for beginers.",
        },
        {
          question: "How do I test internet speed?",
          answer:
            "Is MaxStream free? Yes it’s free for core functions of the web. You can stream for free. No credit card required. No trial. No strings. It may have some limitations but it's great for beginers.",
        },
        {
          question: "MaxStream’s language support?",
          answer:
            "Is MaxStream free? Yes it’s free for core functions of the web. You can stream for free. No credit card required. No trial. No strings. It may have some limitations but it's great for beginers.",
        },
      ],
    };
  },
};
</script>