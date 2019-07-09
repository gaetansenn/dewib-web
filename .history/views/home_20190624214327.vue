<template>
  <div class="home">
    <div class="home-header">
      <div class="home-header-content">
        <h5 class="font-extrabold text-5xl">Hello</h5>
        <dw-animated-headline :values="values"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      values: ['Im developer', 'Gaetan SENN', 'Dewib'],
    }
  }
};
</script>

<style lang="scss">
.home {
  &-header {
    @apply h-screen bg-cover flex flex-wrap content-center justify-center;
    background-image: url('~assets/images/home.jpg');

    &:after {
      @apply absolute inset-0 bg-black z-10;
      content: '';
      opacity: 0.65;
    }

    &-content {
      @apply text-white z-20 font-heading;
    }
  }
}
</style>
