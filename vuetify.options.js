import colors from 'vuetify/es5/util/colors'

export default {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#DD1860',
        accent: '#979797',
        secondary: '#D89B4B',
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
      },
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
      },
    },
  },
}
