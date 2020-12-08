<template>
    <div class="talent-useful">
        <h2>Полезные ссылки на {{name}}:</h2>
        <ul class="talent-links">
            <a v-if="talent_links.main_link" class="talent-social-link" :href="talent_links.main_link"><font-awesome-icon class="talent-link__icon" :icon="['fab', 'youtube']"/></a>
            <a v-if="talent_links.vk_link" class="talent-social-link" :href="talent_links.vk_link"><font-awesome-icon class="talent-link__icon" :icon="['fab', 'vk']"/></a>
            <a v-if="talent_links.tg_link" class="talent-social-link" :href="talent_links.tg_link"><font-awesome-icon class="talent-link__icon" :icon="['fab', 'telegram']"/></a>
            <a v-if="talent_links.insta_link" class="talent-social-link" :href="talent_links.insta_link"><font-awesome-icon class="talent-link__icon" :icon="['fab', 'instagram']"/></a>
        </ul>
    </div>
</template>


<script>
export default {
    props: {
        name: {
            type: String
        },
        talent_links: {
            type: Object
        }
    },
}
</script>


<style lang="sass" scoped>
    .talent-social-link
        margin-right: 20px
        font-size: 45px
        svg
            transition: .4s ease all
            padding: 5px
            &:hover
                transform: translateY(-5px)
        &:last-child
            margin-right: 0px
    .talent-useful
        margin-top: 25px
        margin: 25px auto
        h2
            font-size: 24px
            margin: 10px 0
            font-weight: bold
    .talent-links
        display: flex
        justify-content: center
</style>