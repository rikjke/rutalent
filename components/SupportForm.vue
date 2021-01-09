<template>
    <div class="support-form-wrapper">
        <form class="support-form">
            <div class="form-big-group">
                <h3>Основная информация</h3>
                <div class="form-row">                
                    <div class="form-group">
                        <label for="channelName">Название канала:</label>
                        <input id="channelName" type="text">
                    </div>
                    <div class="form-group">
                        <label for="category">Основная платформа:</label>
                        <input id="categpry" type="text">
                    </div>                   
                     <div class="form-group">
                        <label for="category">Тематика:</label>
                        <input id="categpry" type="text">
                    </div>
                    <div class="form-group">
                        <label for="shortDescription">Короткое описание:</label>
                        <textarea id="shortDescription" rows="5"></textarea>
                    </div>                
                </div>      
                <div class="form-group description">
                    <label for="description">Подробное описание:</label>
                    <textarea id="description" rows="10"></textarea>
                </div>        

            </div>
            <div class="form-big-group">
                <h3>Ссылки на канал</h3>

                 <div class="form-group">
                    <label for="youtube">Youtube<font-awesome-icon :icon="['fab', 'youtube']"/></label>
                    <input id="youtube"/>
                </div>  

                <div class="form-group">
                    <label for="twitch">Twitch<font-awesome-icon :icon="['fab', 'twitch']"/></label>
                    <input id="twitch"/>
                </div> 

                <div class="form-group">
                    <label for="instagram">Инстаграм<font-awesome-icon :icon="['fab', 'instagram']"/></label>
                    <input id="instagram"/>
                </div>  

                <div class="form-group">
                    <label for="telegram">Telegram<font-awesome-icon :icon="['fab', 'telegram']"/></label>
                    <input id="telegram"/>
                </div> 

                <div class="form-group">
                    <label for="vk">ВКонтакте<font-awesome-icon :icon="['fab', 'vk']"/></label>
                    <input id="vk"/>
                </div>  
 
 
            </div>
          

            <button @click="(e)=> {e.preventDefault(); sendEmail()}" class="form-button">Предложить</button>
        </form>
    </div>
</template>


<script>



export default {
    methods: {
        sendEmail() {
            console.log('dsa')
            this.$mail.send({
            from: 'fanat10qdfd@gmail.com',
            subject: 'Incredible',
            text: 'This is an incredible test message',
            to: 'fanat1qdfd@gmail.com',
            })       
            console.log('dsa')    
        }
    },
}
</script>


<style lang="sass" scoped>
svg
    color: var(--mainColor)
    margin-left: 10px
    font-size: 24px
.support-form-wrapper
    display: flex
    margin: 45px auto
    justify-content: center
.support-form
    padding: 25px
    display: flex
    flex-direction: column
    justify-content: center
    width: 40%
    align-items: flex-start
    background-color: var(--dark)
    color: var(--white)
    border-radius: 15px

label
    font-size: 20px
    display: flex
    align-items: center
    margin-bottom: 10px
input, textarea
    border-radius: 10px
    padding: 5px
    border: 3px solid transparent
    font-size: 18px
    color: var(--black)
    transition: .2s ease border
    width: 60%
    &:focus
        outline: none
        border: 3px solid var(--mainColor)
textarea
    resize: none
.form-group
    width: 100%
    margin-bottom: 20px
.form-button
    min-width: 240px
    align-self: center
    border: none
    padding: 8px 10px
    background-color: var(--mainColor)
    color: var(--white)
    cursor: pointer
    border-radius: 15px
    font-weight: bold
    font-size: 20px
    margin-top: 15px
    &:focus
        outline: none
.form-big-group
    display: flex
    flex-direction: column
    width: 100%
    h3
        font-size: 24px
        color: var(--mainColor)
        margin-bottom: 10px

@media screen and (max-width: 860px)
    .support-form
        width: 80%
@media screen and (max-width: 650px)
    .support-form
        width: 100%
        padding: 10px
    input, textarea
        width: 85%
</style>