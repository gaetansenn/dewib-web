<template>
  <div class="flex flex-col justify-center mt-14 ml-8 md:ml-auto md:px-12 max-w-screen-2xl mx-auto">
    <h2 class="dark:text-white text-2xl lg:text-3xl font-semibold text-center mb-8 lg:mb-12">My Toolbox</h2>
    <Swiper :slides-per-view="1.2" space-between="20" :breakpoints="breakpoints" class="swiper-stacks">
      <SwiperSlide v-for="stack in stacks"
        class="bg-gray-50 border-2 dark:border-none border-gray-100 dark:bg-custom-black-2 dark:shadow-lg p-5 w-full rounded-xl">
        <NuxtImg v-for="logo in stack.logos" :src="`/images/stack/${logo}.png`" class="h-[50px] inline-flex" />
        <div class="font-semibold mt-4">{{ stack.name }}</div>
        <p class="mt-3 text-sm">{{ stack.description }}</p>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
const breakpoints = {
  768: {
    spaceBetween: 0,
    init: false
  }
}
const stacks = [{
  name: 'VueJS/NuxtJS',
  description: `With over 6 years of experience, I've had the opportunity to work alongside Sébastien Chopin and the core team of NuxtJS.`,
  logos: ['nuxtjs']
}, {
  name: 'React/Next',
  description: 'Enhancing applications with ISR for real-time content updates and optimized cache management through Contentstack webhooks.',
  logos: ['nextjs']
}, {
  name: 'NodeJS/NestJs',
  description: 'Skilled in NestJS, utilizing websockets and MQTT for real-time updates, Redis for advanced caching, and Bull for task management—enhancing operational efficiency in critical applications.',
  logos: ['nestjs']
}, {
  name: 'PostgreSQL/ORM',
  description: 'Proficient with PostgreSQL, leveraging Objection.js and Knex.js for complex query construction beyond standard CRUD operations, ensuring efficient data handling and manipulation.',
  logos: ['postgresql']
}, {
  name: 'Strapi/ContentStack',
  description: 'Utilized Strapi for a collaborative recipe-sharing app, blending CMS and backend capabilities. Enhanced a Next.js project with ContentStack by enabling dynamic product listings and customizable UI elements directly from the CMS.',
  logos: ['strapi']
}, {
  name: 'UI/UX',
  description: 'Demonstrated UI/UX expertise through the development of two VueJS libraries, one for Vue 2 and another for Vue 3, consistently employing TailwindCSS for design and integration, showcasing a strong foundation in creating intuitive and responsive designs.',
  logos: ['tailwindcss']
}]
</script>

<style lang="scss">
.swiper-stacks {
  &.swiper {
    width: 100%;
  }

  .swiper-wrapper {
    @screen md {
      @apply grid md:grid-cols-2 lg:grid-cols-3 gap-10;
    }
  }

  .swiper-slide {
    height: auto;

    @screen md {
      width: auto !important;
    }
  }
}
</style>