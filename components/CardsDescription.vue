<template>
    <section class="about">
        <div class="messages">
                    <Message 
                    link="talents"
                    linkMessage="Таланты"
                    message="Вы когда-то задавались вопросом, кого же посмотреть на ютубе или твиче? На данный момент на площадках настолько много разного контента, что сложно сделать правильный выбор. На этом сайте будут собраны таланты со всего ютуба и твича, чтобы помочь вам найти своего ютубера/стримера." />
         
                     <img class="cards-images" src="../assets/img/description/cards/cards.png" alt="talents-cards">

         
                    <!-- <div class="message">
                        <p>На странице <NuxtLink to="/talents" class="highlighted">Таланты</NuxtLink> есть два набора карточек для каждой платформы (Youtube и Twitch). В карточке есть аватарка, категория/рубрика и короткое описание таланта.</p>
                        <p>Нажав на карточку, ты перейдешь на страницу с подробным описанием того, кого ты выбрал</p>
                        
                    </div> -->

                    <div class="message">
                        <img class="message__img" src="../assets/img/description/cards/card-date.jpg" alt="card-date">
                        <p>У каждой карточки сверху показана дата актуальности статьи. Информация, которая указывается в статье (например расписание или контент таланта), может меняться со временем. Карточки могут обновляться не сразу, поэтому информация на некоторых из них может быть устаревшей</p>
                    </div>

                    <div class="message">
                        <img src="../assets/img/description/cards/card-text.jpg" alt="card-text" class="message__img">
                        <p>В карточке есть логотип, никнейм таланта, короткое описание и основная категория его канала. Нажимая на карточку, ты перейдешь на страницу, более подробно описывающую этого таланта</p>
                    </div>

                    <Message 
                    message="Если в списке талантов не хватает твоего любимого ютубера/стримера, но он обязан там находиться, ты можешь предложить его кандидатуру на рассмотрение."
                    linkMessage="Предложить"
                    link="support" />
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
    .cards-images
        width: 65%
        display: block
        margin: 0 auto
</style>