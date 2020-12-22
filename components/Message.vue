<template>
    <div class="message">
        <p v-if="message">{{message}}</p>
        <NuxtLink v-if="linkMessage" :to="`/${link}`" class="message__link">{{linkMessage}}</NuxtLink>
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
    text-align: center
    color: var(--white)
    background-color: var(--mainColor)
    padding: 25px
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