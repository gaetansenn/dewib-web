<template>
  <div class="home-header">
    <div class="home-header-content">
      <h5 class="font-extrabold text-5xl text-center">{{ $t('home.title.main') }}</h5>
      <h1 class="text-center text-4xl sm:text-6xl">
        <span class="font-thin align-middle">{{ $t('home.title.sub') }}</span>
        <dw-animated-headline :values="values" class="inline-block align-middle" />
      </h1>
    </div>
  </div>
</template>

<script>
import DwAnimatedHeadline from '~/components/base/others/animated-headline'

export default {
  components: {
    DwAnimatedHeadline,
  },
  data () {
    return {
      values: [this.$t('home.title.firstname'), this.$t('home.title.developer'), this.$t('home.title.company')],
    }
  },
}
</script>

<style lang="scss" scoped>
.home-header {
  @apply h-screen bg-cover flex flex-wrap content-center justify-start bg-black;
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
</style>
