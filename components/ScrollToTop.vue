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
        bottom: 0;
        right: 0;
        padding: 9px;
        border-radius: 15px 0 0 0;
        background: var(--mainColor);
        color: var(--white)
        
    }
    .scroll-to-top .icon {
        font-size: 30px;
        transition: .4s ease all;
    }
    .scroll-to-top:hover .icon {
        transform: scale(1.2)
    }

</style>
    
