<template>
  <transition name="dw-animated-headline-animation" mode="out-in" @enter="onEnter" @after-enter="onAfterEnter" @leave="onLeave">
    <div :key="`index-${currentIndex}`" class="dw-animated-headline-inner" @mouseenter="stop" @mouseleave="start">{{ values[currentIndex] }}</div>
  </transition>
</template>

<script>
export default {
  name: 'DwAnimatedHeadline',
  props: {
    /**
     * Values to be diplayed
     */
    values: {
      type: Array,
      required: true,
    },
  },
  data () {
    return {
      width: 0,
      currentIndex: -1,
    }
  },
  mounted () {
    this.currentIndex = 0
    this.start()
  },
  methods: {
    start () {
      this.loop()
      this._interval = setInterval(this.loop, 2500)
    },
    loop () {
      if (this.currentIndex === this.values.length - 1) this.currentIndex = 0
      else this.currentIndex++
    },
    stop () {
      clearInterval(this._interval)
    },
    onEnter (element) {
      element.style.position = 'absolute'
      element.style.visibility = 'hidden'
      element.style.width = 'auto'

      const width = getComputedStyle(element).width

      element.style.position = null
      element.style.visibility = null
      element.style.width = 0

      // eslint-disable-next-line
      getComputedStyle(element).width

      // We force using animation to set to width
      setTimeout(() => {
        element.style.width = width
      })
    },
    onAfterEnter (element) {
      element.style.width = 'auto'
    },
    onLeave (element) {
      const width = getComputedStyle(element).width

      element.style.width = width

      // eslint-disable-next-line
      getComputedStyle(element).width

      setTimeout(() => {
        element.style.width = 0
      })
    },
  },
}
</script>

<style lang="scss">
.dw-animated-headline {
  &-inner {
    @apply whitespace-no-wrap relative pr-2 overflow-hidden;

    &:after {
      @apply absolute right-0 bg-gray-200;
      width: 2px;
      height: 70%;
      top: 10%;
      content: '';
    }
  }

  &-animation {
    &-enter-active,
    &-leave-active {
      transition: width 0.8s ease-in-out;
    }

    &-enter,
    &-leave-to {
      width: 0;
    }
  }
}
</style>
