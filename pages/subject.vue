<template>
  <v-container>
    <h1>Subject Page</h1>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  head() {
    return {
      title: 'Subject'
    }
  }
})
export default class Subject extends Vue {}
</script>
