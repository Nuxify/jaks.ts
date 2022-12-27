export default (ctx: any, inject: any): void => {
  inject('theme', {
    variables: {
      '--theme-color-accent': ctx.$vuetify.theme.themes.light.accent,
      '--theme-color-error': ctx.$vuetify.theme.themes.light.error,
      '--theme-color-info': ctx.$vuetify.theme.themes.light.info,
      '--theme-color-primary': ctx.$vuetify.theme.themes.light.primary,
      '--theme-color-secondary': ctx.$vuetify.theme.themes.light.secondary,
      '--theme-color-success': ctx.$vuetify.theme.themes.light.success,
      '--theme-color-warning': ctx.$vuetify.theme.themes.light.warning,
    },
  })
}
