<template>
  <div>
    <Header />
      <main class="main">
        <nuxt />
      </main>
    <Footer />
    <ScrollToTop />
  </div>
</template>

<script>


</script>

<style lang="sass">
  .button_link
    font-weight: 700
    color: var(--mainColor)
    text-decoration: underline
    &:focus
      outline: none
  .highlighted
    font-weight: 700
    color: var(--mainColor)
  img
    width: 100%
    display: block
  body
    font-family: "Play", sans-serif
    overflow-y: scroll
    font-size: 18px
    overflow-x: hidden
    position: relative
    color: var(--white)
    background-color: var(--black)
  .main
    padding: 94px 0px 124px
  section
    padding: 0px 10px
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
  a,button
    user-select: none
    -webkit-tap-highlight-color: transparent
  
</style>
