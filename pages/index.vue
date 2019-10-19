<template>
  <div class="home">
    <home-header />
    <home-about />
    <home-services />
    <home-works />
    <home-clients />
    <home-contact />
  </div>
</template>

<script>
import HomeHeader from './components/home-header'
import HomeAbout from './components/home-about'
import HomeServices from './components/home-services'
import HomeWorks from './components/home-works'
import HomeClients from './components/home-clients'
import HomeContact from './components/home-contact'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeAbout,
    HomeServices,
    HomeWorks,
    HomeClients,
    HomeContact
  },
  data () {
    return {
      values: [this.$t('home.title.firstname'), this.$t('home.title.developer'), this.$t('home.title.company')]
    }
  }
}
</script>
