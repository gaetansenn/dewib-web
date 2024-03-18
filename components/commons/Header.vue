<template>
  <header class="flex justify-between py-8 container mx-auto">
    <nav class="flex items-center justify-between p-6 lg:px-8 w-full" aria-label="Navigation">
      <div class="flex lg:flex-1 items-center gap-x-6">
        <NuxtLink to="/" class="text-xl">
          <LogoWhite class="w-24 text-black dark:text-white" />
        </NuxtLink>
      </div>
      <div class="inline-flex lg:hidden gap-5">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <Icon :name="colorIcon" @click="switchMode" class="w-6 h-6 cursor-pointer text-zinc-400" />
      </div>
      <div class="hidden lg:flex lg:gap-x-12 text-sm">
        <NuxtLink v-for="item in nav" :to="item.to" :key="item.to"
          class="text-zinc-400 hover:text-white transition-colors duration-300">{{ item.name
          }}</NuxtLink>
        <Icon :name="colorIcon" @click="switchMode" class="w-6 h-6 cursor-pointer text-zinc-400" />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const nav = [{
  name: 'About me',
  to: '/'
}, {
  name: 'Resume',
  to: '/resume'
}, {
  name: 'Projects',
  to: '/projets'
}, {
  name: 'Blog',
  to: '/blog'
}]

const colorMode = useColorMode()

const colorIcon = computed(() => {
  return (colorMode.value === 'light') ? 'heroicons:moon' : 'heroicons:sun'
})

const switchMode = () => {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<style lang="css">
.router-link-active {
  @apply text-gray-600 dark:text-white;
}
</style>