<template>
  <div class="header__container">
    <v-app-bar
      app
      hide-on-scroll
      height="80"
      :class="[{ 'px-12': $vuetify.breakpoint.mdAndUp }]"
      flat
      color="white"
    >
      <nuxt-link to="/">
        <img
          src="/logo/Nuxify-Logo-withText.svg"
          lazy-src="/logo/Nuxify-Logo-withText.svg"
          alt="Nuxify Logo"
          width="180"
          height="66"
        />
      </nuxt-link>
      <v-spacer />
      <v-btn
        v-for="page in pages"
        :key="page.icon"
        :to="page.link"
        x-large
        text
        :color="activePage == page.name ? 'primary' : 'accent'"
        class="font-weight-bold text-capitalize hidden-sm-and-down"
        @click="onPageClick(page)"
      >
        {{ page.title }}
        <div
          class="slider mt-6"
          :class="[{ 'd-none': activePage != page.name }]"
        ></div>
      </v-btn>

      <v-menu offset-y min-width="100vw">
        <template #activator="{ on, attrs }">
          <v-btn
            color="primary"
            x-large
            v-bind="attrs"
            text
            class="hidden-md-and-up"
            v-on="on"
          >
            <v-icon large>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list color="white" flat nav tile elevation="0">
          <v-list-item
            v-for="(page, key) in pages"
            :key="key"
            :to="page.to"
            class="font-weight-bold"
          >
            <v-list-item-title
              class="ml-3 my-3"
              :class="[
                { 'primary--text': activePage == page.name },
                { 'accent--text': activePage != page.name },
              ]"
              >{{ page.title }}
              <div
                class="slider mt-3"
                :class="[{ 'd-none': activePage != page.name }]"
              ></div>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <v-btn color="primary" large class="font-weight-bold"> Login </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

interface Item {
  name: string
  title: string
  to: string
}

@Component
export default class Header extends Vue {
  //  * Data
  pages: Item[] = [
    {
      name: 'index',
      title: 'Home',
      to: '/',
    },
    {
      name: 'about',
      title: 'About',
      to: '/about',
    },
  ]

  // * * Computed
  /**
   * return currect active page
   */
  get activePage(): string {
    if (this.$route?.name === undefined || this.$route?.name === null) {
      return ''
    }
    if (this.$route?.name === 'users-id') {
      return 'users'
    }
    return this.$route?.name
  }

  // * * Methods
  /**
   * return to selected page/route
   * @param Item     page item object
   */
  onPageClick(item: Item): void {
    this.$router.push({ name: item.name })
  }
}
</script>

<style scoped>
.header__container {
  height: 80px;
}
</style>
