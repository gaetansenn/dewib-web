<template>
  <nav name="header" :class="{ 'sticky': sticky }" class="header">
    <div class="header-container app-container">
      <img src="~static/logo.svg" width="100">
      <ul class="header-right">
        <li v-for="item in items" :key="item.id">
          <nuxt-link v-scroll-to="`#${item.id}`" :to="{ hash: `#${item.id}` }" :class="{ 'active': active === item.id }" @click.prevent>
            {{ item.label }}
          </nuxt-link>
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
      active: false,
      items: [
        { id: 'home', label: this.$t(`${translatePrefix}.home`) },
        { id: 'about', label: this.$t(`${translatePrefix}.about`) },
        { id: 'services', label: this.$t(`${translatePrefix}.services`) },
        { id: 'works', label: this.$t(`${translatePrefix}.works`) },
        { id: 'clients', label: this.$t(`${translatePrefix}.clients`) }
        // { id: 'contact', label: this.$t(`${translatePrefix}.contact`) }
      ]
    }
  },
  computed: {
    sticky () {
      if (this.active === false) return false

      return this.active !== 'home'
    }
  },
  mounted () {
    this.onScroll()
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    getOffsetTop (element) {
      let yPosition = 0
      let nextElement = element

      while (nextElement) {
        yPosition += (nextElement.offsetTop)
        nextElement = nextElement.offsetParent
      }

      return yPosition
    },
    onScroll () {
      let newActive = false
      const topOfScreen = window.pageYOffset

      const positions = this.items.map((item) => {
        const el = window.document.getElementById(item.id)

        return {
          id: item.id,
          posY: this.getOffsetTop(el) - 100 // add offset
        }
      })

      let i = 0

      while (!newActive && i <= positions.length - 1) {
        if (i === positions.length - 1) newActive = positions[i].id
        else if (topOfScreen >= positions[i].posY && topOfScreen < positions[i + 1].posY) newActive = positions[i].id

        i++
      }

      this.active = newActive
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  @apply absolute z-30 py-10 w-full left-0 top-0;

  &.sticky {
    @apply fixed top-0 left-0 w-full bg-white py-5;

    .header-right {
      @apply text-black;

      a:after {
        @apply bg-black;
      }
    }
  }

  &-container {
    @apply flex justify-between;
  }

  &-right {
    @apply inline-flex text-white;

    li {
      @apply px-5;

      a {
        @apply relative;

        &:after {
          @apply absolute w-0 left-0 bg-white;
          content: '';
          transition: all .5s;
          height: 2px;
          bottom: -3px;
        }

        &.active:after {
          @apply w-full;
        }
      }
    }
  }

  &__sticky {
    @apply fixed;
  }
}
</style>
