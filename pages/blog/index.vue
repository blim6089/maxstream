<template>
  <div class="pt-20 pb-[120px] xl:py-[120px] relative">
    <img
      src="~/assets/images/blog/dots.png"
      class="absolute top-[640px] left-0"
      alt=""
    />
    <img
      src="~/assets/images/blog/circle-half.png"
      class="absolute top-[640px] right-0"
      alt=""
    />
    <div class="px-0 xl:px-10">
      <div
        class="
          w-full
          max-w-[1600px]
          mx-auto
          flex flex-col
          justify-center
          xl:flex-row
          items-center
          xl:justify-between
          px-5
          xl:px-40
          mb-16
          xl:mb-[120px]
          bg-[#F8F8F8]
          rounded-none
          xl:rounded-[40px]
          overflow-hidden
          relative
          h-[200px]
          xl:h-[400px]
        "
      >
        <div class="w-full xl:max-w-[453px]">
          <p class="font-ubuntu font-bold text-5xl xl:text-7xl mb-5 xl:mb-10">
            Our blog
          </p>
          <p class="text-lg text-[#383838]">
            Become live streaming pros with our expert tutorials and resources
            to help you level up your live videos.
          </p>
        </div>
        <img
          src="~/assets/images/blog/main.png"
          class="
            hidden
            xl:block
            absolute
            max-w-[800px]
            right-[-180px]
            top-[-170px]
          "
          alt=""
        />
        <img
          src="~/assets/images/blog/stars.png"
          class="hidden xl:block absolute w-[132px] top-0 left-3"
          alt=""
        />
      </div>
    </div>
    <div class="flex justify-center px-5">
      <div class="w-full max-w-[1440px] flex flex-col items-center">
        <div class="flex flex-wrap">
          <div
            v-for="(blog, index) in blogs"
            :key="index"
            class="w-full md:w-1/2 xl:w-1/4 mb-5 xl:mb-14 px-3"
          >
            <BlogCard :data="blog" />
          </div>
        </div>
        <button class="h-10 rounded-full border border-[#7A7A7A] px-6">
          <span class="font-medium text-sm">Show me more</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturePage",
  data: function () {
    return {
      blogs: [
        {
          route: "/blog/1",
          name: "Kristin Watson",
          tag: "Introduction",
          banner: require("~/assets/images/blog/1.png"),
          avatar: require("~/assets/images/blog/avatar/1.png"),
          date: "Oct 25",
          time: 6,
          description:
            "What is workshop? How to create a succerssfull livestream.",
        },
        {
          route: "/blog/1",
          name: "Ronald Richards",
          tag: "Introduction",
          banner: require("~/assets/images/blog/5.png"),
          avatar: require("~/assets/images/blog/avatar/5.png"),
          date: "Sep 26",
          time: 5,
          description:
            "What is workshop? How to create a succerssfull livestream.",
        },
        {
          route: "/blog/1",
          name: "Cody Fisher",
          tag: "Tutorial",
          banner: require("~/assets/images/blog/2.png"),
          avatar: require("~/assets/images/blog/avatar/2.png"),
          date: "Oct 12",
          time: 9,
          description:
            "What is workshop? How to create a succerssfull livestream.",
        },
        {
          route: "/blog/1",
          name: "Theresa Webb",
          tag: "Tutorial",
          banner: require("~/assets/images/blog/6.png"),
          avatar: require("~/assets/images/blog/avatar/6.png"),
          date: "Sep 19",
          time: 8,
          description:
            "What is workshop? How to create a succerssfull livestream.",
        },
        {
          route: "/blog/1",
          name: "Charlie Calzoni",
          tag: "Tutorial",
          banner: require("~/assets/images/blog/3.png"),
          avatar: require("~/assets/images/blog/avatar/3.png"),
          date: "Oct 03",
          time: 24,
          description:
            "What is workshop? How to create a succerssfull livestream.",
        },
        {
          route: "/blog/1",
          name: "Arlene McCoy",
          tag: "Introduction",
          banner: require("~/assets/images/blog/7.png"),
          avatar: require("~/assets/images/blog/avatar/7.png"),
          date: "Sep 14",
          time: 6,
          description:
            "What is workshop? How to create a succerssfull livestream.",
        },
        {
          route: "/blog/1",
          name: "Savannah Nguyen",
          tag: "Tutorial",
          banner: require("~/assets/images/blog/4.png"),
          avatar: require("~/assets/images/blog/avatar/4.png"),
          date: "Sep 28",
          time: 17,
          description:
            "What is workshop? How to create a succerssfull livestream.",
        },
        {
          route: "/blog/1",
          name: "Devon Lane",
          tag: "Tutorial",
          banner: require("~/assets/images/blog/8.png"),
          avatar: require("~/assets/images/blog/avatar/8.png"),
          date: "Sep 02",
          time: 19,
          description:
            "What is workshop? How to create a succerssfull livestream.",
        },
      ],
    };
  },
};
</script>
