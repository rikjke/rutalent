<template>
    <footer class="footer">
        <div class="footer-text">
            <img src="../assets/img/amongtalents.svg" alt="amongtalents-footer-logo"><h3> made by Rikjke {{new Date().getFullYear()}}</h3>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="sass">
.footer
    position: absolute
    left: 0
    right: 0
    bottom: 0
    justify-content: center
    height: 90px
    display: flex
    align-items: center
    background: var(--dark)
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
@media screen and (max-width: 990px)
    .footer-text
        flex-direction: column
        align-items: flex-start
@media screen and (max-width: 576px)
    .footer
        justify-content: flex-start
        padding-left: 15px
</style>