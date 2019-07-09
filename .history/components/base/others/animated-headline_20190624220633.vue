<template>
  <div class="dw-animated-headline">
    <transition name="dw-animated-headline-animation" mode="out-in">
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
      currentIndex: 0,
    };
  },
  mounted () {
    setInterval(() => {
      if (this.currentIndex === this.values.length - 1) this.currentIndex = 0;
      else this.currentIndex++;
    }, 2000);
  },
};
</script>

<style lang="scss">
.dw-animated-headline {
  &-item {
    @apply whitespace-no-wrap ;
  }
  &-animation {
    &-enter-active, &-leave-active {
      transition: all .3s ease;
      overflow: hidden;
    }

    &-enter, &-leave-to {
      width: 0;
    }

    &-enter-to, &-leave {
      width: 100%;
    }
  }
}
</style>
