<template>
    <div class="platform">
        <div class="switcher-wrapper">
            <div class="switcher">
                <!-- <a @click="YT_change"  :class="YT_STATE ? 'switch_youtube switch switch_active' : 'switch'">Youtube</a>
                <a @click="YT_change"  :class="!YT_STATE ? 'switch_twitch switch switch_active' : 'switch'">Twitch</a> -->

                <button :style="platform.active ? {background: platform.color} : {background: '#fff'}" :class="platform.active ? 'switch switch_active' : 'switch'" v-for="(platform, index) in PLATFORMS" :key="index" @click="platform_pick(index)">{{platform.platform}}</button>
            </div>
        </div>

        <TalentList :platform="platform" />
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import TalentList from './TalentList'
export default {
    created () {
        this.platform_pick(0);
    },
    computed: {
        ...mapGetters([
            'YT_STATE',
            'PLATFORMS'

        ])
    },
    methods: {
        ...mapActions([
            'UPDATE_YT',
            'PLATFORM_PICK'
        ]),
        platform_pick(index) {
            this.PLATFORM_PICK(index)
        }
    },
    data() {
        return {
            activeYT: true,
            platform: null,
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
    .switch 
        text-decoration: none
        cursor: pointer
        transition: .4s ease
        font-size: 20px
        margin-right: 10px
        padding: 6px 24px
        border-radius: 10px
        color: var(--dark)
        &:focus
            outline: none
        &:last-child
            margin-right: 0px
    .switch_active 
        color: var(--white)
</style>