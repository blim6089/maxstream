<template>
  <div class="flex justify-center relative pb-24 px-5">
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
    <div class="w-full max-w-[1440px]">
      <div class="py-32 xl:py-40 pb-[108px] flex flex-col items-center">
        <p
          class="
            font-ubuntu font-bold
            leading-[30px]
            md:leading-[45px]
            text-3xl
            md:text-[40px]
            text-center
            mb-6
          "
        >
          MAXSTREAM IS ON THE ROAD TO THE INTERNATIONAL ARENA TO DEFINE ITSELF
        </p>
        <div class="flex justify-center items-center mb-14">
          <span
            class="
              flex
              items-center
              justify-center
              h-10
              bg-[#22222260]
              rounded-xl
              font-medium
              text-sm text-white
              mx-3
              px-3
            "
          >
            Introduction
          </span>
          <span class="text-sm text-[#A7A7A7] mx-3">
            By Kristin Waston • Mar 09, 2021
          </span>
        </div>
        <div class="w-full max-w-full xl:max-w-[738px] relative">
          <ul class="fixed top-[400px] right-10">
            <li class="mb-6" v-for="(link, index) in links" :key="index">
              <CopyLink :data="link" />
            </li>
          </ul>
          <img
            src="~/assets/images/blog/banner.png"
            class="w-full mb-10"
            alt=""
          />
          <p class="text-base leading-6 text-black">
            Winning at the Techfest 2020 National Startup Talent Competition has
            brought MaxStream - a product of WeStream Technology Joint Stock
            Company, honored to become the representative of Vietnam to join in
            the Startup World Cup 2021.<br /><br />
            Two years ago, Vietnamese startup ABIVIN won the first prize in the
            contest. And in order to follow in the footsteps of the "elder" who
            left Vietnam's mark on the world startup map, what should MaxStream
            in particular and Vietnamese startups in general need to prepare
            for? What challenges do company face when going global?<br /><br />
            Let's listen a conversation between VOV and Mr. Shane Wayne Jr - CEO
            of WeStream Technology Joint Stock Company - to understand more
            about this topic.
          </p>
        </div>
      </div>
      <div class="w-full flex flex-col items-center">
        <div class="flex flex-wrap">
          <div
            v-for="(blog, index) in blogs"
            :key="index"
            class="w-full md:w-1/2 xl:w-1/4 mb-5 xl:mb-20 px-3"
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
      links: [
        {
          avatar: require("~/assets/images/blog/link.svg"),
          hoverColor: "hover:bg-[#686868]",
        },
        {
          avatar: require("~/assets/images/blog/twitter.svg"),
          hoverColor: "hover:bg-[#55ACEE]",
        },
        {
          avatar: require("~/assets/images/blog/facebook.svg"),
          hoverColor: "hover:bg-[#3D5C98]",
        },
      ],
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
          name: "Savannah Nguyen",
          tag: "Tutorial",
          banner: require("~/assets/images/blog/4.png"),
          avatar: require("~/assets/images/blog/avatar/4.png"),
          date: "Sep 28",
          time: 17,
          description:
            "What is workshop? How to create a succerssfull livestream.",
        },
      ],
    };
  },
};
</script>
