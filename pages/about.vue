<template>
  <v-container class="about__container mx-auto">
    <h1>About</h1>
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
export default class About extends Vue {}
</script>

<style scoped>
.about__container {
  max-width: 1440px;
}
</style>
