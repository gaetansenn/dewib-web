<template>
  <section id="works" name="works" class="home-works">
    <div class="app-container">
      <div class="inline-flex justify-center w-full">
        <heading attribute="h3" class="my-20 text-4xl font-heading font-black">
          {{ $t('home.works.title') }}
        </heading>
      </div>
    </div>
  </section>
</template>

<script>
import Heading from '~/components/base/heading'

export default {
  components: {
    Heading
  }
}
</script>
