import { LsKeys } from '~/api/localstorage'
import { UserResponseInterface } from '~/api/social'

declare module 'vue/types/vue' {
  interface Vue {
    $localStorageRepository: {
      Clear(): void
      GetItem(key: LsKeys): string | null
      RemoveItem(key: LsKeys): void
      SetItem(key: LsKeys, value: string): void
    }
    $socialRepository: {
      GetUsers: () => Promise<UserResponseInterface[]>
      GetUserByID: (id: number) => Promise<UserResponseInterface>
    }
    // nuxt runtime
    $config: any
  }
}
