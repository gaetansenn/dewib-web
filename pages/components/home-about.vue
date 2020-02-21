<template>
  <section id="about" name="about" class="home-about">
    <div class="home-about-container app-container">
      <div class="w-full md:w-2/5">
        <div class="home-about-hero">
          <img src="~assets/images/me.jpeg" class="home-about-hero-img">
        </div>
      </div>
      <div class="w-full mt-16 md:mt-0 md:w-3/5">
        <div class="home-about-description">
          <h3 class="font-heading font-extrabold text-3xl">
            {{ $t('home.about.title') }}
          </h3>
          <span class="font-body font-normal text-gray-600 uppercase">{{ $t('home.about.skills') }}</span>
          <div class="font-body font-normal text-gray-700 mt-8">
            {{ $t('home.about.description-1') }}
            <div class="py-5">
              {{ $t('home.about.description-2') }}
            </div>
            {{ $t('home.about.description-3.main') }}
            <ul class="ml-5">
              <li>- {{ $t('home.about.description-3.service-1') }}</li>
              <li>- {{ $t('home.about.description-3.service-2') }}</li>
              <li>- {{ $t('home.about.description-3.service-3') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home-about {
  @apply mt-8 mb-24;

  @screen md {
    @apply mt-12;
  }

  &-container {
    @apply flex flex-wrap;
  }

  &-hero {
    @apply pl-3 relative;

    @screen md {
      @apply pl-10;
    }

    &-img {
      @apply relative z-10 mx-auto;

      @screen md {
        @apply mx-0;
      }
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
    @apply flex flex-col px-12 items-start;
  }
}
</style>
