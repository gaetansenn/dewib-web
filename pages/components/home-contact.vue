
<template>
  <section id="contact" name="contact" class="home-contact mobile-container-x">
    <div class="app-container">
      <div class="inline-flex justify-center md:justify-start w-full">
        <heading attribute="h3" class="mb-8 md:mb-12 text-4xl font-heading font-black">
          {{ $t('home.contact.title') }}
        </heading>
      </div>
      <div class="home-contact-content">
        <div class="home-contact-left">
          <div v-for="(type, index) in types" :key="index" class="home-contact-type">
            <div class="home-contact-icon flex-shrink-0">
              <font-awesome-icon :icon="type.icon" class="text-black m-2 text-xl" />
            </div>
            <div class="sm:pl-5 sm:text-left sm:mt-0 text-center mt-2">
              <h6 class="font-heading font-bold">
                {{ $t(type.title) }}
              </h6>
              <p v-if="typeof type.description === 'string'" class="text-xs sm:text-base font-body text-grey-5">
                {{ $t(type.description) }}
              </p>
              <a v-else :href="type.description.url" target="_blank" class="text-xs sm:text-base font-body text-grey-5 hover:text-blue-500">
                {{ $t(type.description.label) }}
              </a>
            </div>
          </div>
        </div>
        <div class="home-contact-opensource">
          <h3 class="font-heading font-black text-xl">
            {{ $t('home.contact.opensource.title') }}
          </h3>
          <p class="my-5">
            {{ $t('home.contact.opensource.description') }}
            <a href="nuxtjs.org" target="_blank" class="cursor-pointer underline inline-block">
              Nuxt.js
            </a>
            {{ $t('home.contact.opensource.description-2') }}
            <a href="https://vuejs.org" target="_blank" class="cursor-pointer underline inline-block">
              Vue.js
            </a>
            {{ $t('home.contact.opensource.description-3') }}
          </p>
          <a href="https://github.com/gaetansenn" target="_blank" class="hover:bg-white hover:text-black-1 border border-black-1 bg-black-1 text-white font-body rounded-sm px-3 py-2 text-sm mt-2">
            {{ $t('home.contact.opensource.link') }}
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
      types: [{
        title: 'home.contact.email.title',
        description: 'home.contact.email.description',
        icon: ['fas', 'envelope']
      }, {
        title: 'home.contact.phone.title',
        description: 'home.contact.phone.description',
        icon: ['fas', 'phone']
      }, {
        title: 'home.contact.linkedin.title',
        description: {
          type: 'link',
          url: 'https://www.linkedin.com/in/gaetan-senn-9729327b/',
          label: 'home.contact.linkedin.description'
        },
        icon: ['fab', 'linkedin-in']
      }, {
        title: 'home.contact.twitter.title',
        description: {
          type: 'link',
          url: 'https://twitter.com/gaetansenn',
          label: 'home.contact.twitter.description'
        },
        icon: ['fab', 'twitter']
      }]
    }
  }
}
</script>

<style lang="scss">
.home-contact {
  @apply bg-grey-3 mt-5 mb-12;

  @screen md {
    @apply mb-24 mt-20;
  }

  &-content {
    @apply flex flex-wrap;
  }

  &-left {
    @apply flex flex-row flex-wrap w-full;

    @screen lg {
      @apply w-3/5;
    }
  }

  &-type {
    @apply flex flex-col items-center justify-center w-1/2 my-3;

    @screen sm {
      @apply justify-start inline-flex flex-row my-8;
    }
  }

  &-icon {
    transition: all 0.3s ease;
    @apply flex items-center justify-center bg-grey-2 rounded-full;
    height: 60px;
    width: 60px;
  }

  &-opensource {
    @apply w-full mt-10;

    @screen lg {
      @apply w-2/5 shadow-lg p-8 mt-0;
    }
  }
}
</style>
