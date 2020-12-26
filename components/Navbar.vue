<template>
            <header id="header" class="header">
                <!-- <v-app-bar-nav-icon class="hamburger" @click="toggleActive"></v-app-bar-nav-icon> -->
                <span class="hamburger" @click="toggleActive">MENU</span>
                <nav :class="active ? 'navbar navbar_active' : 'navbar'">
                    <ul class="menu">
                        <li @click="toggleActive" class="menu__item"><NuxtLink class="menu__link" to="/" exact>Главная</NuxtLink></li>
                        <li @click="toggleActive" class="menu__item"><NuxtLink class="menu__link" to="/talents" exact>Таланты</NuxtLink></li>
                        <li @click="toggleActive" class="menu__item"><NuxtLink class="menu__link" no-prefetch to="/support" exact>Помочь проекту</NuxtLink></li>
                    </ul>
                     <!-- <v-icon @click="toggleActive" class="close">mdi-chevron-left</v-icon> -->
                     <div class="menu__mobile">
                         <img src="../assets/img/talents-white.svg" alt="logotype Talents" class="header-logo">
                         <h2>Таланты со всех площадок прямо здесь</h2>
                     </div>
                </nav>
                <div class="logo-wrapper">
                    <img class="header-logo" src="../assets/img/talents-white.svg" alt="Talents">
                </div>
                <div class="logo-description">
                     <h2>Таланты со всех площадок прямо здесь</h2>
                </div>
            </header>
</template>

<script>

export default {
    data() {
        return {
            active: false
        }
    },
        methods: {
        toggleActive() {
            console.log('clock')
            this.active = !this.active
        }
    }
}
</script>

<style lang="sass">
.hamburger
    display: none
.header 
    display: flex
    height: 64px
    align-items: center
    justify-content: space-between
    padding: 0px 30px
    color: var(--white)
    box-shadow: 0px 4px 4px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(255, 255, 255, 0.14), 0px 1px 10px 0px rgba(255, 255, 255, 0.12)
    position: fixed
    left: 0
    right: 0
    top: 0
    z-index: 20
    background: var(--black)
.menu
    display: flex
    list-style: none
    justify-content: space-between
.menu__item
    margin-right: 15px
.menu__item:last-child 
    margin-right: 0px
.close
    display: none
.logo-wrapper 
    display: flex
    align-items: center
    justify-self: center
.header-logo 
    width: 175px
    display: block
.menu__link 
    text-decoration: none
    font-size: 20px
    transition: .4s ease all
    color: var(--white)
    &:hover
        color: var(--mainColor)
.nuxt-link-active 
    color: var(--mainColor)
h2
    font-weight: 400
    font-size: 20px
.menu__mobile
    display: none
@media screen and (max-width: 990px)
    .hamburger
        left: 15px
        width: 36px
        height: 36px
        font-size: 36px
        display: block
        position: absolute
    .header
        justify-content: center
    .logo-description
        display: none
    .navbar
        transform: translateX(-100%)
        position: fixed
        top: 0
        bottom: 0
        left: 0
        right: 0
        padding: 25px
        background: var(--dark)
        transition: .5s ease all
    .navbar_active
        transform: translateX(0)
    .menu
        flex-direction: column
    .close
        display: inline-block
        position: absolute
        right: 15px
        top: 15px
        font-size: 45px
    .menu__mobile
        display: block
        position: absolute
        bottom: 25px
    .menu__item
        align-self: flex-start
        margin-right: 0
</style>