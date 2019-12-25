<template>
  <section id="services" name="services" class="home-services">
    <div class="app-container">
      <div class="inline-flex justify-center w-full">
        <heading attribute="h3" class="my-20 text-4xl font-heading font-black">
          {{ $t('home.services.title') }}
        </heading>
      </div>
      <div class="px-2">
        <div class="flex -mx-4">
          <div v-for="(service, index) in services" :key="index" class="w-1/3 px-4" @hover="service.hover = true">
            <div class="home-services-service">
              <div class="home-services-service-icon">
                <font-awesome-icon :icon="['fas', service.icon]" class="text-black m-2 text-xl" />
              </div>
              <h6 class="my-5 font-heading font-bold text-lg">
                {{ $t(service.title) }}
              </h6>
              <p class="home-services-service-description">
                {{ $t(service.description) }}
              </p>
            </div>
          </div>
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
      services: [{
        title: 'home.services.architecture.title',
        description: 'home.services.architecture.description',
        icon: 'layer-group'
      }, {
        title: 'home.services.courses.title',
        description: 'home.services.courses.description',
        icon: 'chalkboard-teacher'
      }, {
        title: 'home.services.consulting.title',
        description: 'home.services.consulting.description',
        icon: 'tasks'
      }]
    }
  }
}
</script>

<style lang="scss">
.home-services {
  @apply flex flex-row bg-grey-basic pb-24;

  &-service {
    @apply flex flex-col items-center justify-start bg-white px-8 py-12 rounded-lg shadow-lg h-full;

    &-icon {
      transition: all 0.3s ease;
      @apply flex items-center justify-center bg-grey-basic rounded-full;
      height: 65px;
      width: 65px;
    }

    &:hover {
      .home-services-service-icon {
        @apply bg-black;

        svg {
          @apply text-white;
        }
      }
    }

    &-description {
      @apply font-body font-normal text-sm text-gray-700 text-center;
      word-spacing: 2px;
    }
  }
}
</style>
