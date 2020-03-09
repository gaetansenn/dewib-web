<template>
  <section id="works" name="works" class="home-works">
    <div class="app-container">
      <div class="inline-flex justify-center w-full">
        <heading attribute="h3" class="my-12 md:my-20 text-4xl font-heading font-black">
          {{ $t('home.works.title') }}
        </heading>
      </div>
      <div class="flex flex-wrap mb-20 sm:-mx-3">
        <div v-for="(work, index) in works" :key="index" class="home-works-container">
          <a :href="work.link" target="_blank" class="home-works-work" :style="`background-image: url('${ work.image }'); padding-top: 75%;`">
            <div class="home-works-work-title">
              {{ work.title }}
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Heading from '~/components/base/heading'

export default {
  components: {
    Heading
  },
  data () {
    return {
      works: [{
        title: 'E-commerce website Franprix',
        image: require('~/assets/images/works/franprix.jpg'),
        link: 'https://www.franprix.fr/'
      }, {
        title: 'Marketplace pandacola',
        image: require('~/assets/images/works/pandacola.png'),
        link: 'https://www.pandacola.com/'
      },
      {
        title: 'Open source project',
        image: require('~/assets/images/works/xhr-cache.png'),
        link: 'https://github.com/gaetansenn/xhr-cache'
      }]
    }
  }
}
</script>

<style lang="scss">
.home-works {
  &-container {
    @apply w-full px-12 mb-5;

    @screen md {
      @apply w-1/3 px-3;
    }
  }

  &-work {
    @apply relative shadow-xl bg-no-repeat bg-contain cursor-pointer block;

    &:hover {
      @apply shadow-2xl;
    }

    @screen sm {
      @apply rounded-lg;
    }

    &-title {
      @apply flex items-center justify-center absolute inset-x-0 z-10 text-white bottom-0;
      height: 50px;
    }

    &:after {
      @apply absolute bottom-0 bg-black opacity-75 w-full inset-x-0;
      content: '';
      z-index: 0;
      height: 50px;

      @screen sm {
        @apply rounded-b-lg;
      }
    }
  }

    // @apply w-full rounded-lg bg-contain bg-no-repeat shadow-md relative cursor-pointer;

    // &:hover {
    //   @apply shadow-lg;
    // }

    // @screen sm {
    //   @apply w-1/2;
    // }

    // @screen md {
    //   @apply w-1/3;
    // }

    // &:after {
    //   @apply absolute bottom-0 bg-black opacity-75 w-full rounded-b-lg;
    //   content: '';
    //   z-index: 0;
    //   height: 50px;
    // }
}
</style>
