<template>
  <v-app id="app">
    <Header />
    <nuxt />

    <!-- Alert pop-up -->
    <SnackbarAlert />

    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'
import { SnackbarAlert } from '~/components'

@Component({
  components: {
    Header,
    Footer,
    SnackbarAlert,
  },
})
export default class Default extends Vue {
  mounted(): void {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
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
