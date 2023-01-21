import { LocalStorageRepository } from '~/api/localstorage'
import { SocialRepository } from '~/api/social'

export default (ctx: any, inject: any) => {
  // dependency injection
  inject('localStorageRepository', LocalStorageRepository())
  inject('socialRepository', SocialRepository(ctx.$axios))
}
