<template>
    <div class="platform">
        <div class="switcher-wrapper">
            <div class="switcher">
                <div class="switcher-row">
                    <button :style="platform.active ? {background: platform.color} : {background: '#fff', color: platform.color}" :class="platform.active ? 'switch_platform switch switch_active' : 'switch_platform switch'" v-for="(platform, index) in PLATFORMS" :key="index" @click="platform_pick(index)"><font-awesome-icon :style="platform.active ? {color: 'var(--white)'} : {color: platform.color}" v-if="platform.indicator != 'all'" :icon="['fab', platform.indicator]"/>{{platform.platform}}</button>
                </div>
                <div class="switcher-row">
                    <button @click="OUTPUT_RANDOMIZE" class="switch dice"><font-awesome-icon  :icon="['fas', 'dice']"/><span class="dice__text">Перемешать талантов</span><font-awesome-icon  :icon="['fas', 'dice']"/></button>
                </div>
            </div>
        </div>

        <TalentList :platform="PLATFORMS.filter(item => item.active)[0].indicator" />
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
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
            'PLATFORM_PICK',
            'OUTPUT_RANDOMIZE'
        ]),
        platform_pick(index) {
            this.PLATFORM_PICK(index)
        }
    }
}
</script>

<style lang="sass" scoped>
    .platform
        width: 100%
    .switcher-row
        display: flex
        margin-bottom: 15px
    .switcher 
        display: flex
        justify-content: center
        flex-direction: column
        align-items: center
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
    .dice svg
        transition: 1.2s ease
    .dice
        padding: 5px
        font-size: 22px
        transition: .4s ease
        &:hover svg
            transform: rotate(720deg)
    .dice__text
        margin: 0 5px
    .switch_active 
        color: var(--white)
    svg
        margin-right: 5px
@media screen and (max-width: 990px)
    .switcher-row
        flex-direction: column
        align-items: center

    .switch
        margin: 5px 0
        width: 220px
    .switch_platform svg
        position: absolute
        left: 30px
        margin-right: 0px
    .dice__text
        font-size: 18px
    .dice
        width: 280px
</style>