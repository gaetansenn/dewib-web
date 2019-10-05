<template>
  <div class="home-about">
    <div class="home-about-container app-container">
      <div class="w-2/5">
        <div class="home-about-hero">
          <img src="~assets/images/me.jpeg" class="home-about-hero-img" />
        </div>
      </div>
      <div class="w-3/5">
        <div class="home-about-description">
          <h3 class="font-heading font-extrabold text-3xl">{{ $t('home.about.title') }}</h3>
          <span class="font-body font-normal text-gray-600 uppercase">{{ $t('home.about.skills') }}</span>
          <p class="font-body font-normal text-gray-700 mt-8">
            {{ $t('home.about.description-1') }}
            <b>{{ $t('home.about.description-2') }}</b>
            {{ $t('home.about.description-3') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-about {
  @apply mt-12 bg-gray-100;

  &-container {
    @apply flex;
  }

  &-hero {
    @apply pl-10 relative;

    &-img {
      @apply relative z-10;
    }

    &:after {
      @apply absolute w-4/5 left-0;
      content: '';
      height: 80%;
      bottom: -30px;
      background-image: url('~assets/images/dots.png');
      background-repeat: repeat;
      z-index: 0;
    }
  }

  &-description {
    @apply flex flex-col px-8;
  }
}
</style>
