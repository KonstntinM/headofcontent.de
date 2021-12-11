export const Footer = () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Navbar = () => import('../../components/Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const SectionBeiträge = () => import('../../components/Section/Beiträge.vue' /* webpackChunkName: "components/section-beiträge" */).then(c => wrapFunctional(c.default || c))
export const SectionCallToAction = () => import('../../components/Section/CallToAction.vue' /* webpackChunkName: "components/section-call-to-action" */).then(c => wrapFunctional(c.default || c))
export const SectionContent = () => import('../../components/Section/Content.vue' /* webpackChunkName: "components/section-content" */).then(c => wrapFunctional(c.default || c))
export const SectionHero = () => import('../../components/Section/Hero.vue' /* webpackChunkName: "components/section-hero" */).then(c => wrapFunctional(c.default || c))
export const SectionKontakt = () => import('../../components/Section/Kontakt.vue' /* webpackChunkName: "components/section-kontakt" */).then(c => wrapFunctional(c.default || c))
export const SectionTeam = () => import('../../components/Section/Team.vue' /* webpackChunkName: "components/section-team" */).then(c => wrapFunctional(c.default || c))
export const SectionVideos = () => import('../../components/Section/Videos.vue' /* webpackChunkName: "components/section-videos" */).then(c => wrapFunctional(c.default || c))
export const SectionÜberUns = () => import('../../components/Section/ÜberUns.vue' /* webpackChunkName: "components/sectionüber-uns" */).then(c => wrapFunctional(c.default || c))
export const SectionContentBeitrag = () => import('../../components/Section/Content/Beitrag.vue' /* webpackChunkName: "components/section-content-beitrag" */).then(c => wrapFunctional(c.default || c))
export const SectionContentVideo = () => import('../../components/Section/Content/Video.vue' /* webpackChunkName: "components/section-content-video" */).then(c => wrapFunctional(c.default || c))
export const SectionHeroTrailer = () => import('../../components/Section/Hero/Trailer.vue' /* webpackChunkName: "components/section-hero-trailer" */).then(c => wrapFunctional(c.default || c))
export const SectionTeamMember = () => import('../../components/Section/Team/Member.vue' /* webpackChunkName: "components/section-team-member" */).then(c => wrapFunctional(c.default || c))
export const SectionContentNavigationBeitrag = () => import('../../components/Section/Content/Navigation/Beitrag.vue' /* webpackChunkName: "components/section-content-navigation-beitrag" */).then(c => wrapFunctional(c.default || c))
export const SectionContentNavigationVideo = () => import('../../components/Section/Content/Navigation/Video.vue' /* webpackChunkName: "components/section-content-navigation-video" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
