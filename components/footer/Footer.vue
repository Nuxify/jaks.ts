<template>
  <v-footer app color="primary">
    <span class="mx-auto white--text font-weight-bold"
      >{{ new Date().getFullYear() }} &copy; {{ appName }}</span
    >
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Footer extends Vue {
  // * * Data
  appName?: string = process.env.APP_NAME
}
</script>
