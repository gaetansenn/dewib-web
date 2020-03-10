<template>
  <nav name="header" :class="{ 'sticky': sticky }" class="header">
    <div class="header-container app-container">
      <img :src="sticky ? require('~/static/logo-black.svg') : require('~/static/logo.svg')" width="100" style="height: 54px">
      <div :class="{ 'sticky': sticky && !opened }" class="header-right">
        <font-awesome-icon class="header-right-icon" :icon="['fas', 'bars']" @click="opened = !opened" />
        <div :class="{ 'opened': opened }" class="header-right-wrapper">
          <ul class="header-right-menu">
            <li v-for="item in items" :key="item.id" @click="opened = false">
              <a :href="`#${item.id}`" :class="{ 'active': active === item.id }" @click.prevent="$scrollTo(`#${item.id}`, 300, { offset: item.offset || -90 })">
                {{ item.label }}
              </a>
            </li>
          </ul>
          <div class="header-right-translate">
            <select v-model="locale" :class="sticky && !opened ? 'text-black border-gray-400' : 'text-white'" class="block appearance-none bg-transparent pl-2 border py-1 pr-6 leading-tight" dir="rtl" @change="onLanguageChange($event)">
              <option v-for="(value, key) in locales" :key="key" :value="key">
                {{ value }}
              </option>
            </select>
            <div :class="sticky ? 'text-black' : 'text-white'" class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <font-awesome-icon :icon="['fas', 'caret-down']" class="ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    const translatePrefix = 'header.nav'
    return {
      active: false,
      opened: false,
      items: [
        { id: 'home', label: this.$t(`${translatePrefix}.home`) },
        { id: 'about', label: this.$t(`${translatePrefix}.about`), offset: -100 },
        { id: 'services', label: this.$t(`${translatePrefix}.services`) },
        { id: 'works', label: this.$t(`${translatePrefix}.works`) },
        { id: 'clients', label: this.$t(`${translatePrefix}.clients`) }
        // { id: 'contact', label: this.$t(`${translatePrefix}.contact`) }
      ],
      locales: {
        en: 'English',
        fr: 'Français'
      },
      locale: this.$i18n.locale
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
    onLanguageChange (value) {
      this.opened = false
      this.$i18n.setLocale(value.target.value)
    },
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
  @apply absolute z-30 py-5 w-full left-0 top-0;

  &.sticky {
    @apply fixed top-0 left-0 w-full bg-white py-5 shadow;

    .header-right-icon {
      @apply text-black;
    }
  }

  &-container {
    @apply flex justify-between px-5 items-center;

    @screen md {
      @apply px-0;
    }
  }

  &-right {
    &.sticky {
      .header-right-menu {
        @apply text-black;
      }

      a:after {
        @apply bg-black;
      }
    }

    &-wrapper {
      @apply hidden;

      &.opened {
        @apply absolute inset-x-0 p-8 text-center bg-black block;
        margin-top: 20px;
      }

      @screen md {
        @apply block bg-transparent mt-0 p-0;
        position: initial;
      }
    }

    &-translate {
      @apply inline-block relative ml-3 my-3;

      @screen md {
        @apply pt-0;
      }
    }

    &-icon {
      @apply text-white text-2xl;

      @screen md {
        @apply hidden;
      }
    }

    &-menu {
      @apply text-white;

      @screen md {
        @apply inline-flex;
      }

      li {
        @apply px-5 py-2;

        @screen md {
          @apply py-0;
        }

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
  }

  &__sticky {
    @apply fixed;
  }
}
</style>
