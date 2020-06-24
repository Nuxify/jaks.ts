<template>
  <div>
    <Banner />
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'

import { Banner } from '~/components'

const GLOBAL_STORE = namespace('global')

@Component({
  head() {
    return {
      title: 'Home'
    }
  },
  components: {
    Banner
  }
})
export default class Index extends Vue {
  @GLOBAL_STORE.Action('setTitle') global_set_title!: (payload: string) => void
  /**
   * Get all coments
   *
   * @returns
   */
  async getComments(): Promise<void> {
    try {
      const response = await this.$socialRepository.GetComments()
      console.log('RESPONSE', response)
    } catch (err) {
      console.log('ERROR', err)
    }
  }

  mounted(): void {
    // GET https://jsonplaceholder.typicode.com/comments
    // this.getComments()

    // mutate in vuex
    this.global_set_title('Hello from daks.ts')
  }
}
</script>
