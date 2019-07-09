<template>
  <div class="home">
    <div class="home-header">
      <div class="home-header-content">
        <h5 class="font-extrabold text-5xl text-center">Hello</h5>
        <h1 class="text-center text-6xl">
          <span class="font-thin align-middle">I Am</span>
          <dw-animated-headline :values="values" class="inline-block align-middle"/>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>

import DwAnimatedHeadline from '~/components/base/others/animated-headline'

export default {
  name: 'Home',
  components: {
    DwAnimatedHeadline
  },
  data () {
    return {
      values: ['Gaetan Senn', 'Developer', 'Dewib'],
    }
  }
};
</script>

<style lang="scss">
.home {
  &-header {
    @apply h-screen bg-cover flex flex-wrap content-center justify-center;
    background-image: url('~assets/images/home.jpg');

    &:after {
      @apply absolute inset-0 bg-black z-10;
      content: '';
      opacity: 0.65;
    }

    &-content {
      @apply text-white z-20 font-heading w-full;
    }
  }
}
</style>
