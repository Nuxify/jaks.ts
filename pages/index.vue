<template>
  <v-container class="home__container mx-auto">
    <v-row justify="center" align="center">
      <v-img src="/icon.png" class="mt-10" contain height="300" width="300" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'

const GLOBAL_STORE = namespace('global')

@Component({
  head() {
    return {
      title: 'Home'
    }
  }
})
export default class Index extends Vue {
  @GLOBAL_STORE.Action('setTitle') global_set_title!: (payload: string) => void
}
</script>

<style scoped>
.home__container {
  max-width: 1440px;
}
</style>
