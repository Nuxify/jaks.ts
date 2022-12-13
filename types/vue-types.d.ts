import { UserResponseInterface } from '~/api/social'

declare module 'vue/types/vue' {
  interface Vue {
    $socialRepository: {
      GetUsers: () => Promise<UserResponseInterface[]>
      GetUserByID: (id: number) => Promise<UserResponseInterface>
    }
    $theme: {
      variables: object
    }
    // nuxt runtime
    $config: any
    $Flip: any
    $gsap: any
    $ScrollTrigger: any
  }
}
