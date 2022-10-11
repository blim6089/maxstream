<template>
  <div>
    <div class="flex justify-center px-5">
      <div class="max-w-[1440px] w-full">
        <div
          class="
            flex flex-col-reverse
            xl:flex-row
            justify-between
            items-center
            xl:items-start
            pt-28
            xl:pt-40
            pb-4
            relative
          "
        >
          <div
            class="
              w-full
              max-w-full
              xl:max-w-[480px]
              mt-16
              flex-shrink-0
              mb-10
              xl:mb-0
            "
          >
            <p class="font-ubuntu text-5xl xl:text-7xl font-bold mb-10">
              Professional stream tool
            </p>
            <p class="text-lg text-[#383838] mb-16">
              With MaxStream, you can re-stream on many platforms from the
              available videos, schedule your live-streaming, play on multiple
              pages and groups at the same time.
            </p>
            <div class="flex flex-col sm:flex-row items-start sm:items-center">
              <input
                type="text"
                class="
                  w-80
                  flex-shrink-0
                  h-12
                  rounded-full
                  border border-[#D3D3D3]
                  px-6
                  text-sm
                  mr-0
                  sm:mr-4
                  mb-2
                  sm:mb-0
                "
                placeholder="Enter your email"
              />
              <button
                class="
                  w-80
                  sm:w-auto
                  h-12
                  rounded-full
                  px-6
                  bg-gradient-to-t
                  from-[#721DFF]
                  to-[#8557D2]
                "
              >
                <span class="text-white text-sm">Get started</span>
              </button>
            </div>
          </div>
          <div class="relative xl:static">
            <img src="~/assets/images/home/banner.png" alt="" />
            <img
              class="absolute bottom-0 left-0 w-full"
              src="~/assets/images/home/sponsor.png"
              alt=""
            />
          </div>
        </div>
        <div
          class="
            flex flex-col
            xl:flex-row
            justify-end
            items-center
            py-10
            relative
          "
        >
          <div class="w-full max-w-[453px] xl:absolute left-0">
            <p class="font-ubuntu font-medium text-[32px] mb-6 leading-9">
              MaxStream allows you to live video to 20+ social networks at the
              same time
            </p>
            <p class="text-base text-[#383838] mb-12">
              At MaxStream, we keep nurturing our product portfolio to empower
              content creators to reach wider audiences, and brands to spread
              their messages throughout a massive network of streamers.
            </p>
            <NuxtLink
              to="/"
              class="group text-[#4209A0] font-medium text-sm flex items-center"
            >
              <span class="mr-2">Learn More</span>
              <img
                class="group-hover:animate-arrow"
                src="~/assets/images/icons/arrow-right.svg"
                alt=""
              />
            </NuxtLink>
          </div>
          <img src="~/assets/images/home/phone.png" alt="" />
        </div>
        <div
          class="py-10 flex flex-col xl:flex-row justify-between items-center"
        >
          <img src="~/assets/images/home/1.png" class="mb-10 xl:mb-0" alt="" />
          <div class="w-full max-w-[453px]">
            <p class="font-ubuntu font-medium text-[32px] mb-6">
              Multiply your reach
            </p>
            <ul class="mb-12">
              <li class="flex items-start mb-3 text-base">
                <img
                  src="~/assets/images/icons/check-circle.svg"
                  class="mr-4"
                  alt=""
                />
                <span>
                  Glow your broadcast by on
                  <a class="text-[#4209A0] font-medium"
                    >Facebook, Youtube, Twitch...</a
                  >
                  at the same time.
                </span>
              </li>
              <li class="flex items-start mb-3 text-base">
                <img
                  src="~/assets/images/icons/check-circle.svg"
                  class="mr-4"
                  alt=""
                />
                <span>
                  You can do this with just
                  <a class="text-[#4209A0] font-medium">only one click</a> and
                  we take care the rest.
                </span>
              </li>
            </ul>
            <NuxtLink
              to="/"
              class="group text-[#4209A0] font-medium text-sm flex items-center"
            >
              <span class="mr-2">Learn More</span>
              <img
                class="group-hover:animate-arrow"
                src="~/assets/images/icons/arrow-right.svg"
                alt=""
              />
            </NuxtLink>
          </div>
        </div>
        <div
          class="py-10 flex flex-col xl:flex-row justify-between items-center"
        >
          <div class="w-full max-w-[453px] mb-10 xl:mb-0">
            <p class="font-ubuntu font-medium text-[32px] mb-6">Quick & Easy</p>
            <ul class="mb-12">
              <li class="flex items-start mb-3 text-base">
                <img
                  src="~/assets/images/icons/check-circle.svg"
                  class="mr-4"
                  alt=""
                />
                <span>
                  Nothing to install. Go live in just
                  <a class="text-[#4209A0] font-medium">five single clicks</a>
                  and you can personalize your stream.
                </span>
              </li>
              <li class="flex items-start mb-3 text-base">
                <img
                  src="~/assets/images/icons/check-circle.svg"
                  class="mr-4"
                  alt=""
                />
                <span>
                  Your guests
                  <a class="text-[#4209A0] font-medium"
                    >do not need to create an account</a
                  >. They can join your broadcast with one click
                  <a class="text-[#4209A0] font-medium">only one click</a> and
                  we take care the
                </span>
              </li>
              <li class="flex items-start mb-3 text-base">
                <img
                  src="~/assets/images/icons/check-circle.svg"
                  class="mr-4"
                  alt=""
                />
                <span>
                  <a class="text-[#4209A0] font-medium"
                    >With scheduling, you can plan</a
                  >
                  and share with your viewers ahead of time
                </span>
              </li>
            </ul>
            <NuxtLink
              to="/"
              class="group text-[#4209A0] font-medium text-sm flex items-center"
            >
              <span class="mr-2">Learn More</span>
              <img
                class="group-hover:animate-arrow"
                src="~/assets/images/icons/arrow-right.svg"
                alt=""
              />
            </NuxtLink>
          </div>
          <img src="~/assets/images/home/2.png" alt="" />
        </div>
        <div class="md:py-20 xl:pt-[104px] xl:pb-[200px]">
          <p
            class="
              font-ubuntu
              text-center
              mb-5
              md:mb-20
              font-medium
              text-[32px]
            "
          >
            What people think about MaxStream
          </p>
          <div class="relative overflow-hidden">
            <div class="flex flex-col lg:flex-row gap-x-6 p-2">
              <div class="w-full">
                <feedback :data="feedbacks[0]" />
                <feedback :data="feedbacks[1]" />
                <feedback :data="feedbacks[2]" />
              </div>
              <div class="w-full">
                <feedback :data="feedbacks[3]" />
                <feedback :data="feedbacks[4]" />
                <feedback :data="feedbacks[5]" />
              </div>
              <div class="w-full">
                <feedback :data="feedbacks[6]" />
                <feedback :data="feedbacks[7]" />
                <feedback :data="feedbacks[8]" />
              </div>
            </div>
            <img
              class="
                w-10
                xl:w-20
                hidden
                md:flex
                absolute
                top-0
                -left-2
                -translate-x-full -translate-y-full
              "
              src="~/assets/images/icons/qoute-start.svg"
              alt=""
            />
            <img
              class="
                w-10
                xl:w-20
                hidden
                md:flex
                absolute
                bottom-0
                right-2
                translate-x-full translate-y-full
              "
              src="~/assets/images/icons/qoute-end.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <ReadyStreamer />
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data: function () {
    return {
      feedbacks: [
        {
          name: "Sergio De Paula",
          role: "Streamer at Creatory",
          avatar: require("~/assets/images/avatar/1.png"),
          content:
            "With MaxStream, my audience increased by more than 70%. It has boosted my sales and visibility on Facebook and YouTube",
        },
        {
          name: "Warren Wong",
          role: "Streamer at Blvck",
          avatar: require("~/assets/images/avatar/2.png"),
          content:
            "This is a really great alternative social media that I love to use!!!!! I love the content on this Web!! This Web is great for Music , Gaming , Sports etc and that's very awesome!!!! Very great wide range Social Media!!!!",
        },
        {
          name: "Karina Tess",
          role: "Content Creator at VibeStu",
          avatar: require("~/assets/images/avatar/3.png"),
          content:
            "Best experience ever in my life. Twitch has me addicted to spending my money on all products they show in ads. I love the hot tub streams, gambling streams, ASMR streams. I don't even need those other sites anymore. Twitch provides all I need. I don't even play video games anymore after watching all mentioned above :D",
        },
        {
          name: "Kelly Sikkema",
          role: "CEO at Spencer K",
          avatar: require("~/assets/images/avatar/4.png"),
          content:
            "One of my favorite websites ever. So much fun, so many people I've really connected with and even fallen in love with because of this. Something for everyone, great at mixing people, places, cultures in exciting, fun, innovative ways. Can be improved of course but a good foundation and infrastructure for potentially a lot more. MaxStream will probably survive and thrive into the holographic media revolution. Cheers.",
        },
        {
          name: "Jeffery Erhunse",
          role: "Staff at Fersworld Media",
          avatar: require("~/assets/images/avatar/5.png"),
          content:
            "Love this app but I have a slight concern regarding autoplay. I like to rewatch vods of streams I miss and when it gets to the end, it automatically goes to another video despite me having turned autoplay off. Is there anyways it could be bugged or am I doing something wrong?",
        },
        {
          name: "Joseph Gonzalez",
          role: "Staff at MGN Esport",
          avatar: require("~/assets/images/avatar/1.png"),
          content:
            "The website is really easy to use and I love watching my favorite streamers on MaxStream. Defintly my go to for watching streams.",
        },
        {
          name: "Craig McKay",
          role: "Director at Box Studio",
          avatar: require("~/assets/images/avatar/7.png"),
          content:
            "Is great at showing a deskop-esque layout but on mobile. I use it more than on desktop and it has served me well for years minus the sudden influx of ads at random times. Other than that, it's great.",
        },
        {
          name: "Daniel Lincoln",
          role: "Youtuber",
          avatar: require("~/assets/images/avatar/8.png"),
          content:
            "I love using this web to stream my games and I have alot of fun doing it just wish the lag between me and the users wasn't so bad but other then that I have no complaints",
        },
        {
          name: "Darshan Patel",
          role: "Student",
          avatar: require("~/assets/images/avatar/9.png"),
          content:
            "MaxStream is one of the better streaming website out there I've been using it off and on for almost 3 years now. I'm beginning to get more of rep on here and I can't even think bout nother streaming app cept YouTube cuz i move my streams to my YouTube channel so I can keep a back log on my experiences and grow from past failures. MaxStream on the other hand still hands down my favorite Web",
        },
      ],
    };
  },
};
</script>