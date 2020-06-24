<template>
  <v-container>
    <h1>About Page</h1>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  head() {
    return {
      title: 'About'
    }
  }
})
export default class About extends Vue {}
</script>
