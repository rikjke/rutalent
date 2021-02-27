import Vue from 'vue'
import Vuex from 'vuex'
import youtubeData from '../youtubeData.json'
import twitchData from '../twitchData.json'
Vue.use(Vuex)


export const state = () => ({
    youtubeData,
    twitchData,
    listOutput: [],
    platforms: [
        {
            indicator: "all",
            platform: 'Все платформы',
            active: false,
            color: 'var(--dark)'
        },
        {
            indicator: "twitch",
            platform: 'Twitch',
            active: false,
            color: 'var(--mainColor)'
        },
        {
            indicator: "youtube",
            platform: 'Youtube',
            active: true,
            color: 'var(--red)'
        }

    ]
})

export const mutations = {
    PLATFORM_UPDATE(state, index) {
        state.platforms.forEach(item => item.active = false)
        state.platforms[index].active = true

        state.listOutput = state.youtubeData[0].talents.concat(state.twitchData[0].talents)

    },
    OUTPUT_RANDOMIZER(state) {
        state.listOutput = state.listOutput.sort(() => Math.random() - 0.5)
    }
}
export const actions = {
    PLATFORM_PICK({commit}, index) {
        commit('PLATFORM_UPDATE', index)
    },
    OUTPUT_RANDOMIZE({commit}) {
        commit('OUTPUT_RANDOMIZER')
    }
}
export const getters = {
    YOUTUBE_DATA(state) {
        return state.youtubeData
    },
    TWITCH_DATA(state) {
        return state.twitchData
    },
    PLATFORMS(state) {
        return state.platforms
    },
    OUTPUT(state) {
        return state.listOutput
    }
}
