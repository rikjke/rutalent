<template>
  <div>
    <nuxt />
    <ScrollToTop />
  </div>
</template>

<script>
import ScrollToTop from '../components/ScrollToTop'

export default {
  components: {
    ScrollToTop,
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="sass">

  
  .highlighted
    font-weight: 700
    color: var(--mainColor)
  img
    width: 100%
    display: block
  body 
    font-family: "Play", sans-serif
    font-size: 18px
    overflow-x: hidden
    color: var(--white)
  .main
    background: var(--black)
    padding: 94px 0px
  section
    padding: 0px 25px
  *
    margin: 0
    padding: 0
    box-sizing: border-box
  :root 
    --mainColor: #6441A4
    --dark: #333333
    --white: #dfdfdf
    --talentText: #f3eded
    --red: #f04653
    --lightGray: 	#f0f0f0
    --black: #1f1f23
  
  ::selection 
    background-color: var(--mainColor)
    color: var(--white)
  a
    color: var(--white)
</style>
