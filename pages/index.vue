<template>
  <div class="page main-page">
    <Header />
    <main class="main home-main">

      <CardDescription />

        

    </main>
    <Footer />
  </div>
</template>

<script>

import Header from '../components/Header'
import Footer from '../components/Footer'
import Message from '../components/Message'
import CardDescription from '../components/CardsDescription'
export default {
  components: {
    Header,
    Footer,
    Message,
    CardDescription
  }
}
</script>

<style lang="sass">


</style>
