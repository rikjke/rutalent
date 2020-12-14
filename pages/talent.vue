<template>
    <div class="page">
        <Header />

        <main class="main">
            <section class="talent-main">
                <div class="talent-info">
                    <div class="talent__description">
                        <h1>{{talentData.talent}}</h1>
                        <a :style="{color: talentData.themeColor}" target="_blank" class="talent__link" :href="talentData.platform == 'twitch' ? talentData.talent_links.twitch_link : talentData.talent_links.yt_link"><font-awesome-icon :icon="talentData.platform == 'twitch' ? ['fab', 'twitch'] : ['fab', 'youtube']"/></a>

                        <div :style="{color: talentData.themeColor}" class="platform-topic">
                            <span class="platform">{{talentData.platform === "youtube" ? "Youtube" : "Twitch"}}</span> <span class="topic">{{talentData.topic}}</span>  </div>
                    </div>
                    <img class="talent__img" :src="require(`../assets/img/${this.talentData.talentCode}/${this.talentData.img}`)" alt="">

                    <div v-for="p in talentData.text_about" :key="p" class="talent__p">{{p}}</div>


                <Gallery v-if="talentData.gallery" :talentCode="talentData.talentCode" :gallery="talentData.gallery" />



                <TalentLinks v-if="talentData.talent_links" :name="talentData.talent" :talent_links="talentData.talent_links" />
                    
                </div>
 
                <div class="talent__content">
                    <h2>Примеры контента</h2>
                    <VideoList :videos_src="talentData.videos_src" />
                </div>

                <GoSupport />


            </section>
        </main>
        <Footer />
    </div>
    
</template>

<script>

import Header from '../components/Header'
import VideoList from '../components/VideoList'
import Gallery from '../components/Gallery'
import GoSupport from '../components/GoSupport'
import TalentLinks from '../components/TalentLinks'
import Footer from '../components/Footer'
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
        Gallery,
        GoSupport,
        TalentLinks,
        Footer
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
}


</script>

<style scoped lang="sass">
    .talent__p
        margin: 10px 0
        color: var(--dark)
        font-size: 20px
        text-indent: 35px
    .talent-main
        padding: 0 40px
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
            transform: scale(1.2)
</style>