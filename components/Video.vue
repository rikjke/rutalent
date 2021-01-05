<template>
    <iframe scrolling="no" v-lazy-load class="video" :src="'https://www.youtube.com/embed/' + src" frameborder="0" allowfullscreen></iframe> 
</template>




<script>




export default {
    props: {
        src: {
            type: String
        },
        emit: ['embed'],
    }
}
</script>

<style lang="sass">
.video
  width: 100%
  height: 400px
  margin-bottom: 35px
  z-index: 10
  background: transparent

</style>