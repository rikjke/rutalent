<template>
    <div class="page">
        <Header />

        <main class="main">
            <div class="talent-main">
                <div class="talent-info">
                    <div class="talent__description">
                        <h1>{{talentData.talent}}</h1>
                        <a :style="{color: talentData.themeColor}" target="_blank" class="talent__link" :href="talentData.talent_links.yt_link"><font-awesome-icon :icon="talentData.platform == 'twitch' ? ['fab', 'twitch'] : ['fab', 'youtube']"/></a>

                        <div :style="{color: talentData.themeColor}" class="platform-topic">
                            <span class="platform">{{talentData.platform === "youtube" ? "Youtube" : "Twitch"}}</span> <span class="topic">{{talentData.topic}}</span>  </div>
                    </div>
                    <img class="talent__img" :src="IMG" alt="">

                    <div v-for="p in talentData.text_about" :key="p" class="talent__p">{{p}}</div>


                <Gallery v-if="talentData.gallery" :gallery="talentData.gallery" />


                    <div v-if="talentData.talent_links" class="talent-useful">
                         <h2>Полезные ссылки на {{talentData.talent}}:</h2>
                        <ul class="talent-links">
                            <a v-if="talentData.talent_links.yt_link" class="talent-social-link" :href="talentData.talent_links.yt_link"><font-awesome-icon class="talent-link__icon" :icon="['fab', 'youtube']"/></a>
                            <a v-if="talentData.talent_links.vk_link" class="talent-social-link" :href="talentData.talent_links.vk_link"><font-awesome-icon class="talent-link__icon" :icon="['fab', 'vk']"/></a>
                            <a v-if="talentData.talent_links.tg_link" class="talent-social-link" :href="talentData.talent_links.tg_link"><font-awesome-icon class="talent-link__icon" :icon="['fab', 'telegram']"/></a>
                            <a v-if="talentData.talent_links.insta_link" class="talent-social-link" :href="talentData.talent_links.insta_link"><font-awesome-icon class="talent-link__icon" :icon="['fab', 'instagram']"/></a>
                        </ul>
                    </div>


                </div>
 
                <div v-if="talentData.videos_src" class="talent__content">
                    <h2>Примеры контента</h2>
                    <VideoList :videos_src="talentData.videos_src" />
                </div>


            </div>
        </main>
    </div>
    
</template>

<script>

import Header from '../components/Header'
import VideoList from '../components/VideoList'
import Gallery from '../components/Gallery'
import {mapGetters} from 'vuex'
export default {
    created () {
        let youtube_talent = this.YOUTUBE_DATA[0].talents.filter(talent => talent.talentURL === this.talentURL)
        let twitch_talent = this.TWITCH_DATA[0].talents.filter(talent => talent.talentURL === this.talentURL)
        youtube_talent.length > 0 ? this.talentData = youtube_talent[0] : this.talentData = twitch_talent[0] // Находим среди data нужный массив


    },
    components: {
        Header,
        VideoList,
        Gallery
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
      ]),
        IMG() {
            return require(`../assets/img/${this.talentData.img}`);
      }
    },
}


</script>

<style scoped lang="sass">
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
        h2
            font-size: 24px
            margin: 10px 0
            font-weight: bold
    .talent-links
        display: flex
    .talent__p
        margin: 10px 0
        color: var(--dark)
        font-size: 20px
    .talent-main
        padding: 0 20px
        display: grid
        grid-template-columns: 8fr 5fr
        // display: flex
        // flex-wrap: wrap
        margin: 35px 0
    .talent-info
        display: flex
        flex-direction: column
        // flex-basis: 65%
    .talent__content
        // flex-basis: 35%
        display: flex
        text-align: center
        flex-direction: column
        h2
            font-weight: bold
            margin-bottom: 40px
            font-size: 24px
    .talent__img
        display: block
        width: 100%
        margin: 0 auto
        margin-bottom: 30px
    .talent__description
        margin-bottom: 15px
        display: flex
        align-items: flex-start
        justify-content: space-between
    .platform-topic
        font-weight: bold
        align-self: center
    .talent__link
        font-size: 45px
        color: var(--red)
        transition: .6s ease
        transform: scale(1)
        &:hover
            transform: scale(1.3)
</style>