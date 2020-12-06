<template>
    <div class="page">
        <Header />
        <TalFilter />
        <main class="main">
          <div class="main-wrapper">
            <Platform />
          </div>
        </main>
    </div>
</template>

<script>

import Header from '../components/Header.vue'
import Platform from '../components/Platform.vue'
import TalFilter from '../components/TalFilter.vue'
export default {
  components: {
    Header,
    Platform,
    TalFilter
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
