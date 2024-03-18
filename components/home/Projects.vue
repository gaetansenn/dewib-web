<template>
  <div>
    <h2 class="dark:text-white text-2xl lg:text-3xl font-semibold text-center mb-8 lg:mb-12">Clients</h2>
    <div class="justify-center items-center bg-gray-100 dark:bg-custom-black-2 py-8 md:py-12 pl-6">
      <Swiper slides-per-view="auto" :free-mode="true" :slides-offset-after="30" :breakpoints="breakpoints"
        :modules=[SwiperAutoplay] :autoplay="{ delay: 2500 }" class="select-none swiper-projects">
        <SwiperSlide v-for="project in projects">
          <div class="inline-flex px-4 py-2 bg-white rounded-xl">
            <NuxtImg :src="`/images/projects/${project}.png`" width="200" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
const breakpoints = {
  1024: {
    autoplay: false,
    init: false
  }
}
const projects = ['franprix', 'naos', 'protec', 'ratp', 'hennessy', 'pandacola', 'ua']
</script>

<style lang="scss">
.swiper-projects {
  &.swiper {
    width: fit-content;
  }

  .swiper-wrapper {
    @apply gap-5;
  }

  .swiper-slide {
    width: auto !important;
  }
}
</style>