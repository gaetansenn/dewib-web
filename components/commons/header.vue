<template>
  <nav name="header" class="header">
    <div class="header-container app-container">
      <img src="~static/logo.svg" width="100" />
      <ul class="header-right">
        <li v-for="item in items" :key="item.name">
          <nuxt-link :to="`#${item.name}`">{{ item.label }}</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    const translatePrefix = 'header.nav'
    return {
      items: [
        { name: 'home', label: this.$t(`${translatePrefix}.home`) },
        { name: 'about', label: this.$t(`${translatePrefix}.about`) },
        { name: 'services', label: this.$t(`${translatePrefix}.services`) },
        { name: 'works', label: this.$t(`${translatePrefix}.works`) },
        { name: 'clients', label: this.$t(`${translatePrefix}.clients`) },
        { name: 'contact', label: this.$t(`${translatePrefix}.contact`) },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  @apply absolute z-20 py-10 w-full left-0 top-0;

  &-container {
    @apply flex justify-between;
  }

  &-right {
    @apply inline-flex text-white;
  }

  &__sticky {
    @apply fixed;
  }
}
</style>
