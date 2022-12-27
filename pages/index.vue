<template>
  <v-container class="home__container mx-auto">
    <v-row justify="center" align="center">
      <v-img src="/icon.png" class="mt-10" contain height="300" width="300" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'
import { AlertInterface } from '~/store/global/state.types'

const GLOBAL_STORE = namespace('global')

@Component({
  head() {
    return {
      title: 'Home',
    }
  },
})
export default class Index extends Vue {
  @GLOBAL_STORE.State('alert') global_alert!: AlertInterface
  @GLOBAL_STORE.Action('setAlert')
  global_set_alert!: (payload: AlertInterface) => void

  mounted(): void {
    // print values using runtime config
    console.log('APP_NAME', this.$config.appName)

    // Alert
    this.global_set_alert({
      state: true,
      message: 'Sample alert message here.',
      variant: 'success',
      dismiss: true,
      timeout: 10000,
    })

    // Toast notification
    this.$toast.info('Hello')
  }
}
</script>

<style scoped>
.home__container {
  max-width: 1440px;
}
</style>
