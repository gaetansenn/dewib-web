<template>
  <div class="dw-animated-headline">
    <transition>
      <div :key="`index-${currentIndex}`" class="dw-animated-headling-item">{{ values[currentIndex] }}</div>
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
}
</style>
