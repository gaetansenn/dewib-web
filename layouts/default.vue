<template>
  <div>
    <header-app />
    <nuxt />
    <footer-app />
  </div>
</template>

<script>
import headerApp from '~/components/commons/header'
import footerApp from '~/components/commons/footer'

export default {
  components: {
    headerApp,
    footerApp
  }
}
</script>
