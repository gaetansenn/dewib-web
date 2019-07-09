<template>
  <div class="dw-animated-headline">
    <transition name="dw-animated-headline-animation" mode="out-in">
      <div :key="`index-${currentIndex}`" class="dw-animated-headline-inner">{{ values[currentIndex] }}</div>
    </transition>
  </div>
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
      currentIndex: -1,
    };
  },
  mounted () {
    this.currentIndex = 0;
    // setInterval(() => {
    //   if (this.currentIndex === this.values.length - 1) this.currentIndex = 0
    //   else this.currentIndex++
    // }, 2000);
  },
  methods: {
    enter (element) {
      element.style.position = 'absolute';
      element.style.visibility = 'hidden';

      const width = getComputedStyle(element).width

      console.log('width', width);
    },
    afterEnter (element) {
      element.style.width = 'auto'
    },
    leave (element) {
      element.style.width = this.width;

      // eslint-disable-next-line
      getComputedStyle(element).height

      setTimeout(() => {
        element.style.width = 0;
      });
    }
  }
};
</script>

<style lang="scss">
.dw-animated-headline {
  &-inner {
    @apply whitespace-no-wrap;
  }

  &-animation {
    &-enter-active, &-leave-active {
      transition: width 1s ease-in-out;
      overflow: hidden;
    }

    &-enter, &-leave-to {
      width: 0;
    }
  }
}
</style>
