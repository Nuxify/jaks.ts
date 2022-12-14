<template>
  <div>
    <v-container fluid class="error--container">
      <v-row no-gutters>
        <v-col cols="12">
          <div class="content--container">
            <h1 v-if="error.statusCode === 404">
              {{ pageNotFound }}
            </h1>
            <h1 v-else>
              {{ otherError }}
            </h1>
            <h2>Page not found</h2>
            <h3>
              The page you are looking for does not exist. How you got here is a
              mystery. But you can click the button below to go back to the
              homepage.
            </h3>
            <v-btn
              depressed
              height="44"
              color="primary"
              class="px-7 text-none"
              to="/"
            >
              Back to home
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

interface ErrorResponse {
  readonly statusCode: number
}

@Component({
  layout: 'empty',
  head(this: Error): {} {
    return {
      title:
        this.error.statusCode === 404 ? this.pageNotFound : this.otherError,
    }
  },
})
export default class Error extends Vue {
  @Prop({ default: null })
  error!: ErrorResponse

  pageNotFound: string = '404'
  otherError: string = 'An error occurred'
}
</script>

<style lang="scss" scoped>
.error--container {
  height: calc(100vh - 80px);
  padding: 0;
  .row {
    height: 100%;
    .col {
      display: flex;
      align-items: center;
      justify-content: center;
      .content--container {
        text-align: center;
        max-width: 700px;
        h1 {
          font-size: 100px;
          color: var(--theme-color-primary);
          line-height: 80px;
          font-weight: 400;
        }
        h2 {
          font-size: 14px;
          font-weight: 400;
        }
        h3 {
          font-size: 18px;
          font-weight: 400;
          margin-top: 10px;
        }
        .v-btn {
          margin-top: 25px;
        }
      }
    }
  }
}
</style>
