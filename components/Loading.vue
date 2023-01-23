<template>
  <div v-if="loading" class="loading--page">
    <v-container fluid class="loading--container">
      <img src="/icon.png" alt="Nuxify logo" width="100" height="100" />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class SnackbarAlert extends Vue {
  loading: boolean = false

  /**
   * Start loading
   *
   * @return  {void}
   */
  start(): void {
    this.loading = true
  }

  /**
   * Finish loading
   *
   * @return  {void}
   */
  finish(): void {
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>
.loading--page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  z-index: 99999999;
  .loading--container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      animation: beat 0.75s infinite alternate;
      transform-origin: center !important;
    }

    /* Heart beat animation */
    @keyframes beat {
      to {
        transform: scale(1.4);
      }
    }
  }
}
</style>
