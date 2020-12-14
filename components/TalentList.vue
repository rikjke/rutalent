<template>
    <section class="talents-section">
        <div class="talent-list">
            
            <Talent v-for="talent in OUTPUT" :talentData="talent" :key="talent.talentURL" />  

        </div>

        <!-- <div v-else class="talent-list twitch">
            <Talent v-for="talent in TWITCH_DATA[0].talents" :talentData="talent" :key="talent.id" />
        </div> -->
    </section>
</template>

<script>
import {mapGetters} from 'vuex'
import Talent from './Talent'
export default {
    components: {
        Talent,
    },
    computed: {
        ...mapGetters([
            'YT_STATE',
            'TWITCH_DATA',
            'YOUTUBE_DATA',
            'OUTPUT'
        ]),
    },
    props: {
        platform: {
            type: Object
        },
    },
}
</script>

<style>
    .talent-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        column-gap: 50px;
        margin: 45px auto;
        row-gap: 50px;
        transition: .4s ease all;
        max-width: 1400px;
        padding: 0 40px
    }
</style>