import Vue from 'vue'
import {
  mdiAccount,
  mdiChevronRight,
  mdiFacebook,
  mdiGithub,
  mdiGmail,
  mdiLinkedin,
  mdiMenu,
} from '@mdi/js'

Vue.mixin({
  data: () => {
    return {
      mdiAccount,
      mdiChevronRight,
      mdiFacebook,
      mdiGithub,
      mdiGmail,
      mdiLinkedin,
      mdiMenu,
    }
  },
})
