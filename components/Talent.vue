<template>
    <div @mouseleave="TALENT_HOVER_OFF" @mouseover="TALENT_HOVER_ON" :class="`talent-wrapper talent-${talentData.platform}`">
        <div class="talent__date">Статья актуальна на {{talentData.date}}</div>
        <NuxtLink class="talent__link" :to="{name : 'talent', params: {talentURL: talentData.talentURL}}" >
                
                <div class="talent">
                    <img class="talent__img" :src="require(`../assets/img/${this.talentData.talentCode}/${this.talentData.cardImg}`)" alt="">
                    <div class="talent__bottom">
                        <div class="talent__main">
                            <h3 class="talent__name">{{talentData.talent}}</h3>
                            <p class="talent__subject">{{talentData.topic}}</p>
                        </div>
                        <p class="talent__text">
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
        },
    },
}
</script>

<style lang="sass">
.talent__bottom
    flex: 1
.talent-opacity
    .talent-wrapper
        opacity: 0.5
.talent-opacity
    .talent_light
        opacity: 1
        transform: scale(1.05)
        -webkit-box-shadow: 0px 14px 36px 9px rgba(87,87,87,0.52)
        -moz-box-shadow: 0px 14px 36px 9px rgba(87,87,87,0.52)
        box-shadow: 0px 14px 36px 9px rgba(87,87,87,0.52)
.talent-wrapper
    border-radius: 15px
    color: var(--dark)
    max-width: 450px
    transition: .4s ease all, 1s ease box-shadow
    display: flex
    flex-direction: column
    margin: 0 auto
    &.talent-youtube
        .talent__bottom
            background: var(--red)
    &.talent-twitch
        .talent__bottom
            background: var(--mainColor)
.talent__bottom
    padding: 10px
    color: var(--white)
    border-radius: 0px 0px 15px 15px
.talent 
    display: flex
    flex-direction: column
    height: 100%
.talent__date
    text-align: center
    background-color: rgba(255,255,255,.5)
    border-radius: 15px 15px 0 0
    background: var(--white)
.talent__img 
    display: block
    background: var(--white)
    width: 100%
.talent__main 
    display: flex
    justify-content: space-between
    margin-bottom: 15px

.talent__link 
    text-align: center
    text-decoration: none
    border-radius: 10px
    transition: .4s ease
    color: var(--dark)
    flex: 1
.talent__text 
    margin: 5px 0

.talent__subject 
    font-size: 18px
    font-weight: bold


</style>