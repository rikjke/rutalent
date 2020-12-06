import Vue from 'vue'
import Vuex from 'vuex'
import youtubeData from '../youtubeData.json'
import twitchData from '../twitchData.json'
Vue.use(Vuex)


export const state = () => ({
    activeYT: true,
    youtubeData,
    twitchData
})

export const mutations = {
    CHANGE_YT(state) {
        state.activeYT = !state.activeYT
    }
}
export const actions = {
    UPDATE_YT({commit}) {
        commit('CHANGE_YT')
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
    }
}
