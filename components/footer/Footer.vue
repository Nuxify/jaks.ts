<template>
  <v-footer app color="primary">
    <span class="mx-auto white--text font-weight-bold">
      {{ new Date().getFullYear() }} &copy; {{ $config.appName }}
      {{ $config.appVersion }}
    </span>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Footer extends Vue {}
</script>
