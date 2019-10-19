
<template>
  <section id="contact" name="contact" class="home-contact">
    <div class="app-container">
      <div class="inline-flex justify-center w-full">
        <heading attribute="h3" class="my-20 text-4xl font-heading font-black">
          {{ $t('home.contact.title') }}
        </heading>
      </div>
      <div class="flex flex-row justify-between">
        <div v-for="(type, index) in types" :key="index" class="home-contact-type">
          <div class="home-contact-icon">
            <font-awesome-icon :icon="['fas', type.icon]" class="text-black m-2 text-xl" />
          </div>
          <h6 class="font-heading font-bold mt-3">
            {{ $t(type.title) }}
          </h6>
          <p class="font-body text-gray-600 mt-3">
            {{ $t(type.description) }}
          </p>
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
        title: 'home.contact.address.title',
        description: 'home.contact.address.description',
        icon: 'location-arrow'
      }, {
        title: 'home.contact.email.title',
        description: 'home.contact.email.description',
        icon: 'envelope'
      }, {
        title: 'home.contact.phone.title',
        description: 'home.contact.phone.description',
        icon: 'phone'
      }]
    }
  }
}
</script>

<style lang="scss">
.home-contact {
  @apply bg-grey-3 pb-24;

  &-type {
    @apply w-full flex flex-col items-center;

    @screen md {
      @apply w-1/3;
    }
  }

  &-icon {
      transition: all 0.3s ease;
      @apply flex items-center justify-center bg-grey-2 rounded-full;
      height: 60px;
      width: 60px;
    }
}
</style>
