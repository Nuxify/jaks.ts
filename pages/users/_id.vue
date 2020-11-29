<template>
  <v-container class="user__container mx-auto">
    <h1 class="mb-6">{{ name }}</h1>
    <p>
      <span class="font-weight-bold primary--text">Email:</span> {{ email }}
    </p>
    <p>
      <span class="font-weight-bold primary--text">Username:</span>
      {{ username }}
    </p>
    <p>
      <span class="font-weight-bold primary--text">Phone:</span> {{ phone }}
    </p>
    <p>
      <span class="font-weight-bold primary--text">Address:</span>
      {{ address.street }} {{ address.suite }} {{ address.city }}
      {{ address.zipcode }}
    </p>
    <p>
      <span class="font-weight-bold primary--text">Website:</span> {{ website }}
    </p>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  head(this: User) {
    return {
      title: this.name,
      meta: [
        {
          hid: this.name,
          name: 'description',
          content: this.name,
        },
      ],
    }
  },
  asyncData({ app, params }) {
    const user = app.$socialRepository.GetUserByID(parseInt(params.id))
    return user
  },
})
export default class User extends Vue {
  // * * Data
  /**
   * used only for head title meta
   */
  name: string = ''
}
</script>

<style scoped>
.user__container {
  max-width: 1440px;
}
</style>
