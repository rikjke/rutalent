import Vue from 'vue'
import Vuex from 'vuex'
import youtubeData from '../youtubeData.json'
import twitchData from '../twitchData.json'
Vue.use(Vuex)


export const state = () => ({
    activeYT: true,
    youtubeData,
    twitchData,
    listOutput: youtubeData,
    platforms: [
        {
            indicator: "youtube",
            platform: 'Youtube',
            active: true,
            color: 'var(--red)'
        },
        {
            indicator: "twitch",
            platform: 'Twitch',
            active: false,
            color: 'var(--mainColor)'
        },
        {
            indicator: "all",
            platform: 'Все платформы',
            active: false,
            color: 'var(--dark)'
        }

    ]
})

export const mutations = {
    CHANGE_YT(state) {
        state.activeYT = !state.activeYT
    },
    PLATFORM_UPDATE(state, index) {
        state.platforms.forEach(item => item.active = false)
        state.platforms[index].active = true

        let platform = state.platforms.filter(item => item.active === true)
        if (platform[0].indicator === 'all') {
            state.listOutput = state.youtubeData[0].talents.concat(state.twitchData[0].talents)
        } else if (platform[0].indicator === 'youtube') {
            state.listOutput = state.youtubeData[0].talents
        } else {
            state.listOutput = state.twitchData[0].talents
        }

    }
}
export const actions = {
    UPDATE_YT({commit}) {
        commit('CHANGE_YT')
    },
    PLATFORM_PICK({commit}, index) {
        commit('PLATFORM_UPDATE', index)
    }
}
export const getters = {
    YT_STATE(state) {
        return state.activeYT
    },
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
