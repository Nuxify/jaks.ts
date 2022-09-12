<template>
  <v-container class="about__container mx-auto">
    <h1>About</h1>
    <VueSlickCarousel
      :arrows="false"
      :rows="1"
      :slides-to-show="4"
      :autoplay="true"
      :infinite="true"
      :autoplay-speed="3000"
      :pause-on-dots-hover="false"
      :pause-on-focus="false"
      :pause-on-hover="false"
      :lazy-load="true"
      class="my-12 pt-12"
    >
      <div v-for="(item, i) in ImageList" :key="i" class="justify-center">
        <v-img
          :src="item"
          :lazy-src="item"
          loading="lazy"
          alt="Client's Logo"
          width="290"
          height="auto"
          contain
          class="mx-auto px-5 mt-5"
        ></v-img>
      </div>
    </VueSlickCarousel>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  head() {
    return {
      title: 'About',
    }
  },
})
export default class About extends Vue {
  ImageList: string[] = [
    '/logo/Nuxify-Logo-withText.svg',
    '/logo/Nuxify-Logo-withText.svg',
    '/logo/Nuxify-Logo-withText.svg',
    '/logo/Nuxify-Logo-withText.svg',
    '/logo/Nuxify-Logo-withText.svg',
    '/logo/Nuxify-Logo-withText.svg',
    '/logo/Nuxify-Logo-withText.svg',
    '/logo/Nuxify-Logo-withText.svg',
  ]
}
</script>

<style scoped>
.about__container {
  max-width: 1440px;
}
</style>
