<template>
    <div class="support-form-wrapper">
        <form class="support-form">
            <div class="form-big-group">
                <h3>Основная информация</h3>
                <div class="form-row">                
                    <div class="form-group">
                        <label for="channelName">Название канала *:</label>
                        <input ref="name" id="channelName" type="text">
                    </div>
                    <div class="form-group">
                        <label for="platform">Основная платформа:</label>
                        <input ref="platform" id="platform" type="text">
                    </div>                   
                     <div class="form-group">
                        <label for="category">Тематика:</label>
                        <input ref="category" id="category" type="text">
                    </div>
                    <div class="form-group">
                        <label for="shortDescription">Короткое описание:</label>
                        <textarea ref="shortDescription" id="shortDescription" rows="5"></textarea>
                    </div>                
                </div>      
                <div class="form-group description">
                    <label for="description">Подробное описание:</label>
                    <textarea ref="description" id="description" rows="10"></textarea>
                </div>        

            </div>
            <div class="form-big-group">
                <h3>Ссылки на канал</h3>

                 <div class="form-group">
                    <label for="youtube">Youtube<font-awesome-icon :icon="['fab', 'youtube']"/></label>
                    <input ref="youtube" id="youtube"/>
                </div>  

                <div class="form-group">
                    <label for="twitch">Twitch<font-awesome-icon :icon="['fab', 'twitch']"/></label>
                    <input ref="twitch" id="twitch"/>
                </div> 

                <div class="form-group">
                    <label for="instagram">Инстаграм<font-awesome-icon :icon="['fab', 'instagram']"/></label>
                    <input ref="instagram" id="instagram"/>
                </div>  

                <div class="form-group">
                    <label for="telegram">Telegram<font-awesome-icon :icon="['fab', 'telegram']"/></label>
                    <input ref="telegram" id="telegram"/>
                </div> 

                <div class="form-group">
                    <label for="vk">ВКонтакте<font-awesome-icon :icon="['fab', 'vk']"/></label>
                    <input ref="vk" id="vk"/>
                </div>  
 
 
            </div>
          

            <button @click.prevent="sendEmail" class="form-button">Предложить</button>
        </form>
        <ThankYou v-if="thanks" @closeTY="close" />

    </div>
    
</template>


<script>



export default {
    data() {
        return {
            talent: {
                name: '',
                platform: '',
                category: '',
                shortDescription: '',
                longDescription: '',
                yt_link: '',
                twitch_link: '',
                insta_link: '',
                tg_link: '',
                vk_link: ''
            },
            thanks: false
        }
    },
    methods: {
        sendEmail() {
            
            


            this.talent.name = this.$refs.name.value;
            this.talent.platform = this.$refs.platform.value;
            this.talent.category = this.$refs.category.value;
            this.talent.shortDescription = this.$refs.shortDescription.value;
            this.talent.longDescription = this.$refs.description.value;
            this.talent.yt_link = this.$refs.youtube.value;
            this.talent.twitch_link = this.$refs.twitch.value;
            this.talent.insta_link = this.$refs.instagram.value;
            this.talent.tg_link = this.$refs.telegram.value;
            this.talent.vk_link = this.$refs.vk.value;
            fetch('https://amongtalents-default-rtdb.firebaseio.com//talents.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.talent),
            }).catch(error =>  {
                console.log(error);
                throw error;
            });

            this.$refs.name.value = '';
            this.$refs.platform.value = '';
            this.$refs.category.value = '';
            this.$refs.shortDescription.value = '';
            this.$refs.description.value = '';
            this.$refs.youtube.value = '';
            this.$refs.twitch.value = '';
            this.$refs.instagram.value = '';
            this.$refs.telegram.value = '';
            this.$refs.vk.value = '';
            this.thanks = true;
        },
        close() {
            this.thanks = false;
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