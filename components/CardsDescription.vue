<template>
    <section class="about">
        <div class="messages">
                    <Message 
                    link="talents"
                    linkMessage="Таланты"
                    message="Вы когда-то задавались вопросом, кого же посмотреть на ютубе или твиче? На данный момент на площадках настолько много разного контента, что сложно сделать правильный выбор, к тому же не всегда алгоритмы ютуба работают так, как хотелось бы. Это Talents, и здесь будут собраны самые разные контент-мейкеры, чтобы ты нашел своего" />
         

         


             <div class="message">
             <p>У каждой карточки есть свой логотип, название канала, основная категория и краткое описание таланта. По нажатию на карточку ты перейдешь на более подробное описание таланта</p>
             <img src="../assets/img/description/cards/cards.png" alt="cards">


             </div>

    



        <div class="message">
            <img class="message__img" src="../assets/img/description/cards/card-date.jpg" alt="card-date">
            <p>Ещё ты можешь увидеть, насколько актуальна информация о таланте. Это касается контента и расписания таланта, которое указывается на его странице. Такие вещи имеют свойство меняться со временем, поэтому бери это во внимание</p>
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
    @media screen and (max-width: 990px)
        .cards-images
            width: 100%
</style>