<template>
  <transition name="dw-animated-headline-animation" @enter="enter" @after-enter="afterEnter" @leave="leave">
    <div :key="`index-${currentIndex}`" class="dw-animated-headline-item">{{ values[currentIndex] }}</div>
  </transition>
</template>

<script>
export default {
  name: 'DwAnimatedHeadline',
  props: {
    /**
     * Values to be deplayed
     */
    values: {
      type: Array,
      required: true,
    },
  },
  data () {
    return {
      width: 0,
      currentIndex: 0,
    };
  },
  mounted () {
    // setInterval(() => {
    //   if (this.currentIndex === this.values.length - 1) this.currentIndex = 0
    //   else this.currentIndex++
    // }, 2000);
  },
  methods: {
    // enter (element) {
    //   this.width = getComputedStyle(element).width

    //   console.log(this.width)

    //   element.style.width = 0
    // },
    // afterEnter (element) {
    //   element.style.width = 'auto'
    // },
    // leave (element) {

    // }
  }
};
</script>

<style lang="scss">
.dw-animated-headline {
  &-item {
    @apply whitespace-no-wrap;
  }
  &-animation {
    &-enter-active, &-leave-active {
      transition: all 1s ease-in-out;
      overflow: hidden;
    }

    &-enter, &-leave-to {
      transform: translateX(0);
    }

    &-enter-to, &-leave {
      transform: translateX(1);
    }
  }
}
</style>
