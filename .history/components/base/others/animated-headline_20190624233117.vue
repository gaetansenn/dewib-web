<template>
  <div class="dw-animated-headline">
    <transition name="dw-animated-headline-animation" @enter="enter">
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
      element.style.width = 'auto';

      const width = getComputedStyle(element).width

      console.log('width', width);
    },
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
