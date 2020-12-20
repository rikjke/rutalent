<template>
            <header id="header" class="header">
                
                <nav class="navbar">
                    <ul class="menu">
                        <li class="menu__item"><NuxtLink class="menu__link" to="/" exact>Главная</NuxtLink></li>
                        <li class="menu__item"><NuxtLink class="menu__link" to="/talents" exact>Таланты</NuxtLink></li>
                        <li class="menu__item"><NuxtLink class="menu__link" to="/support" exact>Помочь проекту</NuxtLink></li>
                    </ul>
                </nav>
                <div class="logo-wrapper">
                    <img class="header-logo" src="../assets/img/talents.svg" alt="Talents">
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
            
        }
    },
}
</script>

<style>
    .header {
        display: flex;
        height: 64px;
        align-items: center;
        justify-content: space-between;
        padding: 0px 30px;
        color: black;
        box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 20;
        background: #fff;
    }
    .menu {
        display: flex;
        list-style: none;
        justify-content: space-between;
    }
    .menu__item {
        margin-right: 15px;
    }
    .menu__item:last-child {
        margin-right: 0px;
    }
    .logo-wrapper {
        display: flex;
        align-items: center;
        justify-self: center;
    }
    .header-logo {
        width: 175px;
        display: block;
    }
     .menu__link {
        text-decoration: none;
        font-size: 20px;
        color: var(--dark);
        transition: .4s ease all;
    }
    .menu__link:hover {
        color: var(--mainColor);
    }
     .nuxt-link-active {
        color: var(--mainColor);
        border-radius: 8px;
    }
    h2 {
        font-weight: 400;
        font-size: 20px;
    }

</style>