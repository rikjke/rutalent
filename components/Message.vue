<template>
    <div class="message">
        <p v-if="message">{{message}}</p>
        <NuxtLink v-if="linkMessage" :to="`/${link}`" class="message__link">{{linkMessage}}</NuxtLink>
        <img v-if='img' :src='img' alt="">
    </div>
</template>


<script>
export default {
    props: {
        message: {
            type: String
        },
        link: {
            type: String
        },
        linkMessage: {
            type: String
        },
        img: {
            type: String
        }
    },
}
</script>


<style lang="sass">
.message__img
    width: 75%
    margin: 0 auto
    display: block
    border-radius: 15px
.messages
  display: grid
  grid-template-columns: 1fr
  grid-gap: 60px
.message
    max-width: 680px
    text-align: left
    color: var(--white)
    align-items: flex-start
    background-color: var(--dark)
    display: flex
    padding: 25px
    flex-direction: column
    margin: 0 auto
    border-radius: 15px
    p
        font-size: 26px
    .message__link
        margin: 35px 0 15px
        display: inline-block
        color: var(--white)
        border-radius: 15px
        text-decoration: none
        padding: 6px 18px
        background: var(--mainColor)
        text-transform: uppercase
        align-self: center
        font-size: 22px
        transition: .4s ease
        &:hover
            transform: scale(1.1)
@media screen and (max-width: 576px)
    .message p
        font-size: 20px
</style>