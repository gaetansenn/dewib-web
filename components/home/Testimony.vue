<template>
  <div class="container mx-auto app-x">
    <Swiper :slides-per-view="1" class="swiper-testimony" :modules="[SwiperPagination]"
      :pagination="{ enabled: true, dynamicBullets: true }">
      <SwiperSlide v-for="testimony in testimonies">
        <div class="flex flex-col items-center justify-center">
          <NuxtImg :src="`/images/testimonies/${testimony.id}.jpeg`" height="100"
            class="object-cover rounded-full shrink-0 mb-5" width="100" />
          <h3 class="text-center text-gray-500 dark:text-gray-300 text-md leading-relaxed mb-7 max-w-screen-md">{{
      testimony.description }}
          </h3>
          <div class="font-semibold mb-1">{{ testimony.client }}</div>
          <div class="text-xs text-gray-500 font-semibold">{{ testimony.type }}</div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
const testimonies = [{
  id: 'ua',
  client: 'Célia - Useradgents',
  type: 'Chef de projet',
  description: 'Very good collaboration with Gaëtan who led the project franprix.fr from architecture to production, always with a concern to do well both technically and in terms of customer experience, and providing high quality work. He is comfortable on all types of subjects and has demonstrated strong VueJS, Nuxt, nodeJS and integration expertise. His integration into the team went very well, he takes care of the lead on less experienced developers to advance them. In short, we would be happy to call on him!'
}, {
  id: 'accenture',
  client: 'Helene de brix - Ciruseo / Accenture',
  type: 'Head of application Development',
  description: 'Very good collaboration with Gaëtan who knew how to bring his VueJS / NuxtJS expertise within the project but also ideas on the UI / UX design part.'
}, {
  id: 'protec',
  client: 'Luigi - Protection Civile',
  type: 'Lorem ispum',
  description: 'Very good collaboration with Gaëtan who knew how to bring his VueJS / NuxtJS expertise within the project but also ideas on the UI / UX design part.'
}]


</script>

<style lang="scss">
.swiper-testimony {
  &.swiper {
    width: 100%;
  }

  .swiper-wrapper {
    @apply gap-10 pb-10;
  }
}
</style>