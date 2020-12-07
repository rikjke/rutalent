<template>
    <nuxt />
</template>

<script>
export default {
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
  $mainColor: #6441A4
  $dark: #333
  $white: #f6f6f6
  $talentText: #f3eded
  img
    width: 100%
    display: block
  body 
    font-family: "Play", sans-serif
    font-size: 18px
    overflow-x: hidden
    color: var(--dark)
  .main
    background: var(--lightGray)
  *
    margin: 0
    padding: 0
    box-sizing: border-box
  :root 
    --mainColor: #6441A4
    --dark: #333333
    --white: #f6f6f6
    --talentText: #f3eded
    --red: #FF0000
    --lightGray: 	#f0f0f0
  
  ::selection 
    background-color: var(--mainColor)
    color: #fff
  
  .main 
    padding: 64px 25px
  
</style>
