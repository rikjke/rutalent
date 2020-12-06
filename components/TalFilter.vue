<template>
    <v-list class="filter">

        <!-- <template v-for="item in categories">
            <v-list-item :key="item.text">
                <v-list-item-avatar>
                    <v-icon v-text="item.icon">
                    </v-icon>
                </v-list-item-avatar>

                <v-list-item-title v-text="item.text">
                </v-list-item-title>
            </v-list-item>
        </template> -->

        <v-list-item>
            <v-list-item-title v-text="'list Title'">
                listItem
            </v-list-item-title>
        </v-list-item>
        <v-list-item>
            <v-list-item-title>
                listItem
            </v-list-item-title>
        </v-list-item>
        <v-list-item>
            <v-list-item-title>
                listItem
            </v-list-item-title>
        </v-list-item>
    </v-list>
</template>

<script>
export default {
    data() {
        return {

        }
    },
}
</script>

<style scoped>
    .filter {
        width: 100px;
        top: 0;
        bottom: 0;
        position: fixed;
        padding-top: 64px;
    }
</style>