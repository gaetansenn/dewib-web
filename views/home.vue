<template>
  <div class="home">
    <home-header />
    <home-about />
  </div>
</template>

<script>
import HomeHeader from './components/home-header'
import HomeAbout from './components/home-about'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeAbout,
  },
  data () {
    return {
      values: [this.$t('home.title.firstname'), this.$t('home.title.developer'), this.$t('home.title.company')],
    }
  },
}
</script>

<style lang="scss">
@apply;
</style>
