<template>
    <section class="talent-gallery">
        <h2>Галерея</h2>

        <div class="gallery">
            <figure v-for="photo in gallery" :key="photo" class="gallery__item">
                <img v-lazy-load class="gallery__img" :data-src="require(`../assets/img/${talentCode}/${photo}`)"  alt="">
            </figure>
        </div>
                <!-- :src="require(`../assets/img/${photo}`)" -->
    </section>
</template>
<script>
export default {
    props: {
        gallery: {
            type: Array
        },
        talentCode: {
            type: String
        }
    },
}
</script>

<style lang="sass" scoped>
h2
    text-align: center
    font-size: 38px
    font-weight: bold
    margin-bottom: 15px
.talent-gallery
    margin: 50px auto
.gallery__img
    width: 100%
    height: 100%
    object-fit: cover
.gallery
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 15px
    width: 75%
    margin: 0 auto
@media screen and (max-width: 576px)
    .gallery
        width: 100%
        grid-template-columns: 1fr
</style>