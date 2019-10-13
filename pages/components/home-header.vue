<template>
  <section id="home" name="header" class="home-header">
    <div class="home-header-content">
      <h5 class="font-extrabold text-5xl text-center">
        {{ $t('home.title.main') }}
      </h5>
      <h1 class="text-center text-4xl sm:text-6xl">
        <span class="font-thin align-middle">{{ $t('home.title.sub') }}</span>
        <dw-animated-headline :values="values" class="inline-block align-middle" />
      </h1>
    </div>
    <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5" fill="#FFF" class="home-header-bottom">
      <polygon points="-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,300" />
    </svg>
  </section>
</template>

<script>
import DwAnimatedHeadline from '~/components/base/others/animated-headline'

export default {
  components: {
    DwAnimatedHeadline
  },
  data () {
    return {
      values: [this.$t('home.title.firstname'), this.$t('home.title.developer'), this.$t('home.title.company')]
    }
  }
}
</script>

<style lang="scss" scoped>
.home-header {
  @apply h-screen bg-cover flex flex-wrap content-center justify-start bg-black relative;
  background-image: url('~assets/images/home.jpg');

  &:after {
    @apply absolute inset-0 bg-black z-10;
    content: '';
    opacity: 0.65;
  }

  &-content {
    @apply text-white z-20 font-heading w-full;
  }

  &-bottom {
    @apply absolute inset-x-0 bottom-0 z-20;
  }
}
</style>
