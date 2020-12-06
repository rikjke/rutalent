<template>
    <div class="page">
        <Header />

        <main class="main">
            <div class="talent-main">
                <div class="talent-info">
                    <div class="talent__description">
                        <h1>{{talentData.talent}}</h1>
                        <a :style="{color: talentData.themeColor}" target="_blank" class="talent__link" :href="talentData.channel_src"><font-awesome-icon :icon="talentData.platform == 'twitch' ? ['fab', 'twitch'] : ['fab', 'youtube']"/></a>
                        <div :style="{color: talentData.themeColor}" class="platform-topic"><span class="platform">{{YT_STATE ? "Youtube" : "Twitch"}}</span> <span class="topic">{{talentData.topic}}</span>  </div>
                    </div>
                    <img class="talent__img" :src="IMG" alt="">

                    <div class="talent__p">{{talentData.text_about}}</div>

                    <ul class="talent-links">
                        <a href="https://www.youtube.com/channel/UC8M5YVWQan_3Elm-URehz9w">Ютуб<font-awesome-icon class="talent-link__icon" :icon="['fab', 'youtube']"/></a>
                    </ul>
                </div>

                <div class="talent__content">
                    <h2>Пример контента таланта</h2>
                </div>
            </div>
        </main>
    </div>
    
</template>

<script>

import Header from '../components/Header'
import {mapGetters} from 'vuex'
export default {
    created () {
        let youtube_talent = this.YOUTUBE_DATA[0].talents.filter(talent => talent.talentURL === this.talentURL)
        let twitch_talent = this.TWITCH_DATA[0].talents.filter(talent => talent.talentURL === this.talentURL)

        youtube_talent.length > 0 ? this.talentData = youtube_talent[0] : this.talentData = twitch_talent[0] // Находим среди data нужный массив

    },
    components: {
        Header,
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
    .talent-links
        display: flex
        a
            color: var(--red)
            text-decoration: none
            font-size: 24px
    .talent-link__icon
        margin-left: 10px
    .talent__p
        margin: 5px 0
        color: var(--dark)
        font-size: 20px
    .talent-main
        padding: 0 80px
        display: grid
        grid-template-columns: 4fr 3fr
        margin: 35px 0
    .talent-info
        display: flex
        flex-direction: column
    .talent__content
        text-align: center
    .talent__img
        display: block
        width: 100%
        margin: 0 auto
    .talent__description
        margin-bottom: 15px
        display: flex
        align-items: center
        justify-content: space-between
    .platform-topic
        font-weight: bold
    .talent__link
        font-size: 55px
        color: var(--red)
        transition: .6s ease
        transform: scale(1)
        &:hover
            transform: scale(1.2)
</style>