<template>
    <footer class="footer">
        <div class="footer-text">
            <img src="../assets/img/talents-white.svg" alt="logotype-white"><h3> made by Rikjke {{new Date().getFullYear()}}</h3>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="sass">
    .footer
        position: relative
        bottom: 0
        padding: 30px 0
        background: var(--mainColor)
        color: var(--white)
        text-align: center
        h3
            letter-spacing: 1.5px
    .footer-text
        display: flex
        align-items: flex-end
        justify-content: center
        img
            width: 150px
            margin-right: 15px
</style>