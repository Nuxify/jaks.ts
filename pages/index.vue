<template>
  <v-container class="home__container mx-auto">
    <v-row justify="center" align="center">
      <!-- Sample animation only (delete if not needed) -->
      <v-img
        v-gsap.to="{
          rotation: 360,
          x: 0,
          duration: 2,
        }"
        src="/icon.png"
        class="mt-10"
        contain
        height="300"
        width="300"
      />

      <v-img
        v-gsap.from="{
          opacity: 0,
          y: 200,
          duration: 2,
        }"
        src="/icon.png"
        class="mt-10"
        contain
        height="300"
        width="300"
      />

      <v-img
        v-gsap.fromTo="[
          { opacity: 0, y: -350 },
          { opacity: 1, y: 0, duration: 3 },
        ]"
        src="/icon.png"
        class="mt-10"
        contain
        height="300"
        width="300"
      />

      <v-card width="100" height="100" color="primary" class="box"> </v-card>
      <v-btn @click="rotateAnimate"> Rotate Animate </v-btn>
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

  /**
   * Rotate animation
   *
   * @return  {void}
   */
  rotateAnimate(): void {
    this.$gsap.to('.box', { rotation: 27, x: 100, duration: 1 })
  }

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
