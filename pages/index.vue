<template>
  <div class="page main-page">
    <Header />
    <main class="main home-main">
      <section class="messages">
          <div class="message">
            <p>Вы когда-то задавались вопросом, кого же посмотреть на ютубе или твиче? На данный момент на площадках настолько много разного контента, что сложно сделать правильный выбор. На этом сайте будут собраны таланты со всего ютуба и твича, чтобы помочь вам найти своего ютубера/стримера.</p>
            <NuxtLink to="/talents" class="message__link">Таланты</NuxtLink>
          </div>
          <div class="message">
            <p>На странице <NuxtLink to="/talents" class="highlighted">Таланты</NuxtLink> есть два набора карточек для каждой платформы (Youtube и Twitch). В карточке есть аватарка, категория/рубрика и короткое описание таланта.</p>
            <p>Нажав на карточку, ты перейдешь на страницу с подробным описанием того, кого ты выбрал</p>
          </div>
          <div class="message">
            <p>Если в списке талантов не хватает твоего любимого ютубера/стримера, но он обязан там находиться, ты можешь предложить его кандидатуру на рассмотрение.</p>
            <NuxtLink to="/support" class="message__link">Предложить</NuxtLink>
          </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>

import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="sass">
.messages
  display: grid
  grid-template-columns: 1fr
  grid-gap: 60px
.message
    max-width: 680px
    text-align: center
    color: var(--white)
    background-color: var(--mainColor)
    padding: 15px
    margin: 0 auto
    border-radius: 15px
    p
        font-size: 24px
    .message__link
        margin: 35px 0 15px
        display: inline-block
        color: var(--white)
        border-radius: 15px
        text-decoration: none
        padding: 6px 12px
        background: var(--red)
        text-transform: uppercase
        font-size: 22px
        transition: .4s ease
        &:hover
            -webkit-box-shadow: 0px 8px 18px 5px #71B9FF
            box-shadow: 0px 8px 18px 5px #71B9FF
            transform: translateY(-10px)
</style>
