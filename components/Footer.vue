<template>
  <div class="flex flex-col">
    <img src="~/assets/images/wave.png" class="w-full" alt="" />
    <div class="flex justify-center bg-[#411688] px-5">
      <div
        class="
          flex flex-col
          xl:flex-row
          justify-between
          py-10
          xl:py-[120px]
          w-full
          max-w-[1400px]
        "
      >
        <div class="max-w-[302px] mb-10 xl:mb-0">
          <img src="~/assets/images/logo/light-logo.svg" class="mb-6" alt="" />
          <div class="text-white text-sm tracking-[-0.5px] opacity-50">
            <p class="mb-3">
              Add: 2972 Westheimer Rd. Santa Ana, Illinois 85486
            </p>
            <p>Tel: (406) 555-0120</p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row">
          <div>
            <p class="font-ubuntu text-white text-lg font-medium mb-8">
              Company
            </p>
            <div class="opacity-50 text-sm text-white">
              <li class="list-none mb-4">
                <NuxtLink to="/about">About</NuxtLink>
              </li>
              <li class="list-none mb-4">
                <NuxtLink to="/feature">Features</NuxtLink>
              </li>
              <li class="list-none mb-4">
                <NuxtLink to="/pricing">Pricing</NuxtLink>
              </li>
            </div>
          </div>
          <div class="mx-0 md:mx-[170px]">
            <p class="font-ubuntu text-white text-lg font-medium mb-8">
              Resources
            </p>
            <div class="opacity-50 text-sm text-white">
              <li class="list-none mb-4">
                <NuxtLink to="/blog">Blog</NuxtLink>
              </li>
              <li class="list-none mb-4">
                <NuxtLink to="/faq">Help Center</NuxtLink>
              </li>
              <li class="list-none mb-4">
                <NuxtLink to="/terms">Term & Conditions</NuxtLink>
              </li>
              <li class="list-none mb-4">
                <NuxtLink to="/policy">Privacy</NuxtLink>
              </li>
              <li class="list-none mb-4">
                <NuxtLink to="/faq">FAQ</NuxtLink>
              </li>
            </div>
          </div>
          <div>
            <p class="font-ubuntu text-white text-lg font-medium mb-8">
              Our network
            </p>
            <div class="opacity-50 text-xs text-white">
              <li class="list-none mb-4 flex items-center">
                <img src="~/assets/images/icons/facebook.svg" alt="" />
                <span class="ml-2">Facebook</span>
              </li>
              <li class="list-none mb-4 flex items-center">
                <img src="~/assets/images/icons/youtube.svg" alt="" />
                <span class="ml-2">Youtube</span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[50px] flex justify-center items-center bg-[#2A0861]">
      <span class="text-xs text-white opacity-80">
        Copyright 2021 MaxStream. All rights reserved
      </span>
    </div>
  </div>
</template>