<template>
    <footer class="footer">
        <h3>RuTalent made by Rikjke {{new Date().getFullYear()}}</h3>
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
        background: var(--dark)
        color: var(--white)
        text-align: center
        h3
            letter-spacing: 1.5px
</style>