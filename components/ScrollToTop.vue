<template>
    <a class="scroll-to-top" href="javascript:void(0)" onclick="window.scroll(0,1)">
    <font-awesome-icon class="icon" :icon="['fas', 'arrow-up']"/> </a>
</template>


<style scoped>
    .scroll-to-top {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--mainColor);
        color: var(--white);
        transition: .8s ease;
        
    }
    .scroll-to-top .icon {
        font-size: 30px;
        transition: .4s ease all;
    }
    .scroll-to-top:hover .icon {
        transform: scale(1.1)
    }

</style>
    
