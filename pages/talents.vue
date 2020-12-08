<template>
    <div class="page">
        <Header />
        <TalFilter />
        <main class="main">
          <div class="main-wrapper">
            <Platform />
          </div>
        </main>
        <Footer />
    </div>
</template>

<script>

import Header from '../components/Header.vue'
import Platform from '../components/Platform.vue'
import TalFilter from '../components/TalFilter.vue'
import Footer from '../components/Footer'
export default {
  components: {
    Header,
    Platform,
    TalFilter,
    Footer
  }
}
</script>

<style scoped>


  .main-wrapper {
    display: flex;
  }
  .main {
    padding-left: 100px
  }
</style>
