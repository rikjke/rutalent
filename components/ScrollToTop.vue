<template>
    <a v-if="scroll" class="scroll-to-top" href="#">
    <font-awesome-icon class="icon" :icon="['fas', 'arrow-up']"/> </a>
</template>

<script>
export default {
    methods: {
        getScroll() {
            this.scroll = window.pageYOffset;
        }
    },
    data() {
        return {
            scroll: null,
        }
    },
    created: function () {
       if (process.browser) {
            window.addEventListener('scroll', this.getScroll);
       }
    },
    destroyed: function () {
        if (process.browser) {
            window.removeEventListener('scroll', this.getScroll);
        }
    }
}
</script>

<style scoped>
    .scroll-to-top {
        position: fixed;
        bottom: 50px;
        right: 40px;
        color: var(--mainColor)
    }
    .scroll-to-top .icon {
        font-size: 30px;
        transition: .4s ease all;
    }
    .scroll-to-top:hover .icon {
        transform: scale(1.2)
    }
 @media (max-width: 680px) {
     .scroll-to-top {
         color: #333;
     }
 }
</style>
    
