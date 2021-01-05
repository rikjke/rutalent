<template>

            <section class="talent-main">
                <div class="talent-info">
                    <div class="talent__description">
                        <h1>{{talentData.talent}}</h1>
                        <a :style="{color: talentData.themeColor}" target="_blank" class="talent__link" :href="talentData.platform == 'twitch' ? talentData.talent_links.twitch_link : talentData.talent_links.yt_link"><font-awesome-icon :icon="talentData.platform == 'twitch' ? ['fab', 'twitch'] : ['fab', 'youtube']"/></a>

                        <div :style="{color: talentData.themeColor}" class="platform-topic">
                            <span class="platform">{{talentData.platform === "youtube" ? "Youtube" : "Twitch"}}</span> <span class="topic">{{talentData.topic}}</span>  </div>
                    </div>
                    <img v-lazy-load class="talent__img" :src="require(`../assets/img/${this.talentData.talentCode}/${this.talentData.img}`)" alt="">

                    <!-- <p v-for="p in talentData.text_about" :key="p" class="talent__p"> -->
                        <v-runtime-template v-for="item in talentData.text_about" :key="item" :template="`${item}`"></v-runtime-template>
                    <!-- </p> -->


                    
                </div>

                <div class="talent__content">
                    <h2>Примеры контента</h2>

                    <VideoList :videos_src="talentData.videos_src" />
                </div>
                <Gallery v-if="talentData.gallery" :talentCode="talentData.talentCode" :gallery="talentData.gallery" />
                <TalentLinks v-if="talentData.talent_links" :name="talentData.talent" :talent_links="talentData.talent_links" />


                <Message 
                message="Если тебе показался полезным этот контент, а так же ты знаешь ютубера/стримера, которого здесь нет, но он заслуживает здесь находиться, ты можешь помочь проекту, предложив его 🤝"
                link="/support"
                linkMessage="Предложить"/>


            </section>

    
</template>

<script>


import {mapGetters} from 'vuex'
import VRuntimeTemplate from 'v-runtime-template'
export default {
    created () {
        let youtube_talent = this.YOUTUBE_DATA[0].talents.filter(talent => talent.talentURL === this.talentURL)
        let twitch_talent = this.TWITCH_DATA[0].talents.filter(talent => talent.talentURL === this.talentURL)
        youtube_talent.length > 0 ? this.talentData = youtube_talent[0] : this.talentData = twitch_talent[0] // Находим среди data нужный массив


    },
    props: {
        talentURL: String
    },
    data() {
        return {
            talentData: null
        }
    },

    computed: {
        ...mapGetters([
            'YT_STATE',
            'YOUTUBE_DATA',
            'TWITCH_DATA'
      ])
    },
    beforeDestroy () {
    },
    destroyed () {
    },
    components: {
        VRuntimeTemplate,
    },
}


</script>

<style lang="sass">
.talent__heading
    font-size: 26px
    margin: 10px 0
.talent__list-item
    margin-bottom: 10px
    &:last-child
        margin-bottom: 0
.talent__list
    margin: 0 0 10px 40px
.talent-main
    padding: 0 40px
    display: flex
    flex-direction: column
    width: 70%
    margin: 35px 0
.talent-info
    display: flex
    flex-direction: column
    // flex-basis: 65%
.talent__content
    // flex-basis: 35%
    position: absolute
    right: 0px
    width: 30%
    display: flex
    text-align: center
    flex-direction: column
    h2
        font-weight: bold
        margin-bottom: 40px
        font-size: 28px
.talent__img
    display: block
    width: 100%
    margin: 0 auto
    margin-bottom: 30px
.talent__description
    margin-bottom: 15px
    display: flex
    align-items: center
    justify-content: space-between
.platform-topic
    font-weight: bold
    align-self: center
    text-align: right
.talent__link
    font-size: 45px
    color: var(--red)
    transition: .6s ease
    transform: scale(1)
    &:hover
        transform: scale(1.2)
.talent__p
    margin: 5px 0
    font-size: 19px
    line-height: 26px

@media screen and (max-width: 990px)
    .talent-info
        margin-bottom: 25px
    .video
        width: 90%
    .talent__content
        position: static
        width: auto
    .talent-main
        width: 100%
@media screen and (max-width: 576px)
    .talent-main
        padding-left: 10px
        padding-right: 10px
</style>