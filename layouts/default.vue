<template>
  <v-app id="app">
    <Header />
    <nuxt />
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import { Header, Footer } from '~/components'

@Component({
  components: {
    Header,
    Footer
  }
})
export default class Default extends Vue {}
</script>
