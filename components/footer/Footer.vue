<template>
  <v-footer app>
    <span class="mx-auto">&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Footer extends Vue {
  // declare vaiable
  fixed: boolean = false
}
</script>
