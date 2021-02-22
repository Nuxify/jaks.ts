<template>
  <v-container class="user__container mx-auto">
    <v-icon size="50" color="primary">{{ $data.mdiAccount }}</v-icon>
    <h1 class="mb-6">Users</h1>
    <nuxt-link v-for="user in users" :key="user.id" :to="`/users/${user.id}`">
      <p>{{ user.name }}</p>
    </nuxt-link>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  head() {
    return {
      title: 'Users',
    }
  },
  async asyncData({ app }): Promise<{}> {
    const users = await app.$socialRepository.GetUsers()
    return { users }
  },
})
export default class Users extends Vue {}
</script>

<style scoped>
.user__container {
  max-width: 1440px;
}
</style>
