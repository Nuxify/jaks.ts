<template>
  <v-container>
    <h1>Faculty Page</h1>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  head() {
    return {
      title: 'Faculty'
    }
  }
})
export default class Faculty extends Vue {}
</script>
