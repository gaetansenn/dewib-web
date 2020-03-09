
<template>
  <section id="clients" name="clients" class="home-clients">
    <div class="app-container">
      <!-- <div class="inline-flex justify-center w-full">
        <heading attribute="h3" class="my-20 text-4xl font-heading font-black">
          {{ $t('home.clients.title') }}
        </heading>
      </div> -->
      <carousel :per-page="1" pagination-color="#D6D6D6" pagination-active-color="#869791">
        <slide v-for="(item, index) in items" :key="index" class="flex flex-col text-center items-center justify-center w-full">
          <img :src="item.image" class="rounded-full bg-cover" width="90">
          <p class="px-5 md:px-0 text-grey-5 font-body font-normal text-base mt-5 leading-relaxed">
            {{ $t(item.description) }}
          </p>
          <h6 class="font-semibold font-heading mt-8">
            {{ $t(item.author) }}
          </h6>
          <span class="text-grey-6 text-xs font-semibold font-body mt-1">
            {{ $t(item.role) }}
          </span>
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      items: [{
        image: require('~/assets/images/clients/celine.jpeg'),
        description: 'home.clients.useradgents.description',
        author: 'home.clients.useradgents.author',
        role: 'home.clients.useradgents.role'
      }, {
        image: require('~/assets/images/clients/helene.jpeg'),
        description: 'home.clients.ciruseo.description',
        author: 'home.clients.ciruseo.author',
        role: 'home.clients.ciruseo.role'
      }]
    }
  }
}
</script>

<style lang="scss">
.home-clients {
  @apply bg-grey-basic py-16;

  @screen md {
    @apply py-24;
  }
}
</style>
