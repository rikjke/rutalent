<template>
    <section class="talents-section">
        <div class="talent-list">
            
            <Talent v-for="talent in OUTPUT" v-show="platform === 'all' || talent.platform === platform" :talentData="talent" :key="talent.talentURL" />  

        </div>
    </section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {


    computed: {
        ...mapGetters([
            'OUTPUT'
        ]),

    },
    props: {
        platform: {
            type: String,
            default: 'all'
        },
    },
    methods: {
        ...mapActions([
            'OUTPUT_RANDOMIZE'
        ])
    },
    mounted () {
        this.OUTPUT_RANDOMIZE();
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
    }
</style>