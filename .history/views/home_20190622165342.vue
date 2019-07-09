<template>
  <div class="home">
    <div class="home-header">
      <div class="home-header-content">Hello</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

const

<style lang="scss">
.home {
  &-header {
    @apply h-screen bg-cover flex flex-wrap content-center justify-center;
    background-image: url('~assets/images/home.jpg');

    :after {
      @apply absolute inset-0 bg-black;
      content: '';
      opacity: 0.65;
    }
  }
}
</style>
