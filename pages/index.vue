<template>
  <div class="container mx-auto grid lg:grid-cols-12 items-center justify-center gap-8 lg:gap-0">
    <div
      class="rounded-full relative border-[18px] border-white dark:border-zinc-700 aspect-square w-[70%] sm:w-[50%] lg:w-[80%] xl:w-[363px] overflow-hidden shadow-[0_0_25px_0_rgba(0,0,0,.1)] dark:shadow-[0_0_25px_0_rgba(0,0,0,.8)] place-self-center lg:place-self-end lg:col-span-5">
      <NuxtImg src="/images/me.jpg" alt="Profile picture" class="object-cover absolute w-full h-full" />
    </div>
    <div class="flex flex-col items-center lg:items-start lg:col-span-7 text-center lg:text-left app-x">
      <div class="text-zinc-400 mb-2 font-light">Fullstack developer</div>
      <h1 class="text-4xl lg:text-5xl font-semibold mb-6">Gaetan SENN</h1>
      <p class="font-normal text-gray-500 dark:text-zinc-300 text-sm leading-relaxed lg:max-w-[500px]">Blending
        cutting-edge front-end
        technologies with scalable back-end solutions, I harness the full potential of JavaScript to build seamless
        digital experiences. With a rich history of collaboration on high-impact projects and a passion for pushing the
        boundaries of web development, I bring over a decade of expertise to crafting sophisticated applications that
        are as intuitive as they are powerful.
      </p>
      <div class="inline-flex gap-5 mt-6">
        <Button color="primary">Download CV</Button>
        <Button>Contact Me</Button>
      </div>
    </div>
  </div>
  <div class="mt-12">
    <div class="flex gap-12 lg:gap-24 justify-center bg-zinc-100 dark:bg-custom-black-2 py-6 app-x">
      <div v-for="item in counter" :key="item.name"
        class="flex flex-col lg:flex-row items-center justify-center gap-x-5">
        <div class="text-primary text-2xl font-semibold">{{ item.value }}</div>
        <h3 class="text-center text-sm md:text-base">{{ item.name }}</h3>
      </div>
    </div>
  </div>
  <HomeStacks class="mt-8 lg:mt-12" />
  <HomeProjects class="mt-8 lg:mt-12" />
  <HomeTestimony class="mt-8 lg:mt-12" />
</template>

<script setup>
const counter = [{
  name: 'Year experience',
  value: '10+'
}, {
  name: 'Completed projects',
  value: '30'
}, {
  name: 'Happy customers',
  value: '100%'
}]
</script>