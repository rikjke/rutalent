<template>
    <div class="video-list">
        <iframe class="video" v-for="(src, index) in videos_src" :src="src" :key="index" frameborder="0" allowfullscreen></iframe> 
    </div>
</template>

<script>
export default {
    props: {
        videos_src: {
            type: Array
        },
    },
}
</script>

<style lang="sass" scoped>
    .video-list
        display: flex
        flex-direction: column
        align-items: center
    .video
        margin-bottom: 25px
        max-width: 600px
        display: block
        width: 80%
        height: 300px
        &::last-child
            margin-bottom: 0
</style>
