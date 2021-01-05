<template>
    <div @mouseleave="TALENT_HOVER_OFF" @mouseover="TALENT_HOVER_ON" :class="`talent-wrapper talent-${talentData.platform}`">
        <div class="talent-card__date">Статья актуальна на {{talentData.date}}</div>
        <NuxtLink  no-prefetch class="talent-card__link" :to="{name : 'talent', params: {talentURL: talentData.talentURL}}" >
                
                <div class="talent">
                        <img slot="image" class="talent-card__img" v-lazy-load :data-src="require(`../assets/img/${this.talentData.talentCode}/${this.talentData.cardImg}`)" alt="">
                    <div class="talent-card__bottom">
                        <div class="talent-card__main">
                            <h3 class="talent-card__name">{{talentData.talent}}</h3>
                            <span class="talent-card__subject">{{talentData.topic}}</span>
                        </div>
                        <p class="talent-card__text">
                            {{talentData.shortDescription}}
                        </p>

                    </div>
                </div>
        </NuxtLink>

    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    methods: {
        TALENT_HOVER_ON() {
            document.querySelector('.talent-list').classList.add('talent-opacity')
            this.$el.classList.add('talent_light')
        },
        TALENT_HOVER_OFF() {
            document.querySelector('.talent-list').classList.remove('talent-opacity')
            this.$el.classList.remove('talent_light')
        },

    },
    computed: {
        ...mapGetters([
            'YT_STATE',
        ])
    },
    data() {
        return {
            username: 'Utopia',
            isHovered: false
        }
    },
    props: {
        talentData: {
            type: Object
        }
    },
}
</script>

<style lang="sass">
.talent-card__bottom
    flex: 1
.talent-opacity
    .talent-wrapper
        opacity: 0.5
.talent-opacity
    .talent_light
        opacity: 1
        transform: scale(1.05)
.talent-wrapper
    border-radius: 15px
    color: var(--dark)
    transition: .4s ease all
    display: flex
    flex-direction: column
    margin: 0 auto
    &.talent-youtube
        .talent-card__bottom
            background: var(--red)
    &.talent-twitch
        .talent-card__bottom
            background: var(--mainColor)
.talent-card__bottom
    padding: 5px 10px
    color: var(--white)
    border-radius: 0px 0px 15px 15px
.talent 
    display: flex
    flex-direction: column
    height: 100%
.talent-card__date
    text-align: center
    color: var(--white)
    border-radius: 15px 15px 0 0
    background: var(--dark)
.talent-card__img 
    background: var(--white)
.talent-card__main 
    display: flex
    justify-content: space-between

.talent-card__link 
    text-align: center
    text-decoration: none
    border-radius: 10px
    transition: .4s ease
    color: var(--dark)
    flex: 1
.talent-card__text 
    margin: 5px 0
    text-align: left

.talent-card__subject 
    font-size: 18px
    font-weight: bold
.talent-card__name
    text-align: left
@media screen and (max-width: 990px)
    .talent-wrapper
        width: 90%

</style>