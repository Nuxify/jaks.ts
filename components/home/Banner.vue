<template>
  <div class="banner__container d-flex justify-content"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Banner extends Vue {}
</script>

<style scoped>
.banner__container {
  height: calc(100vh - 80px);
}
</style>
