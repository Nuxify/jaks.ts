import { CommentInterface } from '~/api/social'

declare module 'vue/types/vue' {
  interface Vue {
    $socialRepository: {
      GetComments: () => Promise<CommentInterface[]>
    }
  }
}
