<template>
    <div class="platform">
        <div class="switcher-wrapper">
            <div class="switcher">
                <button :style="platform.active ? {background: platform.color} : {background: '#fff', color: platform.color}" :class="platform.active ? 'switch switch_active' : 'switch'" v-for="(platform, index) in PLATFORMS" :key="index" @click="platform_pick(index)"><font-awesome-icon :style="platform.active ? {color: 'var(--white)'} : {color: platform.color}" v-if="platform.indicator != 'all'" :icon="['fab', platform.indicator]"/>{{platform.platform}}</button>
            </div>
        </div>

        <TalentList :platform="PLATFORMS.filter(item => item.active)[0].indicator" />
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
    components: {
        TalentList,
    }
}
</script>

<style lang="sass" scoped>
    .platform
        width: 100%
    .switcher 
        display: flex
        justify-content: center
    .switch 
        text-decoration: none
        cursor: pointer
        transition: .4s ease
        font-size: 20px
        margin-right: 10px
        padding: 6px 24px
        border-radius: 10px
        color: var(--dark)
        position: relative
        display: flex
        justify-content: center
        align-items: center
        border: none
        &:focus
            outline: none
        &:last-child
            margin-right: 0px
    .switch_active 
        color: var(--white)
    svg
        margin-right: 5px
@media screen and (max-width: 990px)
    .switcher
        flex-direction: column
        align-items: center
    .switch
        margin: 5px 0
        width: 220px
    svg
        position: absolute
        left: 30px
        margin-right: 0px
</style>