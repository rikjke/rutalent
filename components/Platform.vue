<template>
    <div class="platform">
        <div class="switcher-wrapper">
            <div class="switcher">
                <a @click="YT_change"  :class="YT_STATE ? 'switch_youtube switch switch_active' : 'switch'">Youtube</a>
                <a @click="YT_change"  :class="!YT_STATE ? 'switch_twitch switch switch_active' : 'switch'">Twitch</a>
            </div>
        </div>

        <TalentList :activeYT="activeYT"/>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import TalentList from './TalentList'
export default {
    computed: {
        ...mapGetters([
            'YT_STATE'
        ])
    },
    methods: {
        ...mapActions([
            'UPDATE_YT'
        ]),
        YT_change() {
            this.UPDATE_YT()
        }
    },
    data() {
        return {
            activeYT: true
        }
    },
    components: {
        TalentList,
    },
}
</script>

<style lang="sass" scoped>
    .platform
        width: 100%
    .switcher 
        text-align: center
        margin-top: 40px
    
    .switch 
        cursor: pointer
        transition: .4s ease
    .switch 
        text-decoration: none
        font-size: 20px
        padding: 6px 24px
        border-radius: 10px
        color: var(--dark)
    .switch_active 
        color: var(--white)
        &.switch_youtube
            background-color: var(--red)
        &.switch_twitch
            background-color: var(--mainColor)
</style>