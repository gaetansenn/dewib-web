<template>
  <div class="dw-animated-headline">
    <transition name="dw-animated-headline-animation" @enter="enter" @after-enter="afterEnter" @leave="leave">
      <div :key="`index-${currentIndex}`" class="dw-animated-headline-item">{{ values[currentIndex] }}</div>
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
    enter (element) {
      const width = getComputedStyle(element).width

      console.log('width', width);

      element.style.width = 0
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
  &-item {
    @apply whitespace-no-wrap;
  }
  &-animation {
    &-enter-active, &-leave-active {
      transition: all 1s ease-in-out;
      overflow: hidden;
    }

    &-enter, &-leave-to {
      width: 0;
    }
  }
}
</style>
