<template>
  <div class="home">
    <div class="home-header">
      <div class="home-header-content">
        <h5 class="font-extrabold text-5xl text-center">Hello</h5>
        <h1>
          <span class="font-thin">I Am&nbsp;</span>
          <dw-animated-headline class="inline-block" :values="values"/>
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
      values: ['Im developer', 'Gaetan SENN', 'Dewib'],
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
