<template>
  <div class="alert--container">
    <v-alert
      v-if="global_alert.state"
      tile
      :color="global_alert.variant"
      class="alert-message white--text"
    >
      <h1>{{ global_alert.message }}</h1>
      <v-btn fab x-small depressed text @click="global_set_alert(false)">
        <v-icon color="white"> mdi-close </v-icon>
      </v-btn>
    </v-alert>
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace, Watch } from 'nuxt-property-decorator'
import { AlertInterface } from '~/store/global/state.types'

const GLOBAL_STORE = namespace('global')

@Component
export default class SnackbarAlert extends Vue {
  @GLOBAL_STORE.State('alert') global_alert!: AlertInterface
  @GLOBAL_STORE.Action('setAlert')
  global_set_alert!: (payload: AlertInterface) => void

  @Watch('global_alert', { immediate: true, deep: true })
  onAlertChange(): void {
    if (this.global_alert.state) {
      if (!this.global_alert.dismiss) {
        return
      }

      setTimeout(() => {
        this.global_set_alert({ state: false })
      }, this.global_alert.timeout)
    }
  }
}
</script>

<style lang="scss" scoped>
.alert--container {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 9999;
  .alert-message {
    margin-bottom: 0;
    padding: 10px 20px !important;
    h1 {
      font-size: 18px;
      text-align: center;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      padding: 0 40px !important;
    }
    .v-btn {
      position: absolute;
      right: 1%;
      top: 50%;
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }
  }
}

@media (max-device-width: 599px) {
  .alert--container {
    .alert-message {
      h1 {
        padding: 5px 20px !important;
      }
    }
  }
}
</style>
