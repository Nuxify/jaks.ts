import { SocialRepository } from '~/api/social'

export default (ctx: any, inject: any) => {
  // dependency injection
  inject('socialRepository', SocialRepository(ctx.$axios))
}
