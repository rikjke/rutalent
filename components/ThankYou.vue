<template>
    <div class="ty-wrapper">
        <div class="ty">
            <h1>
                Спасибо за совет
            </h1>
            <button @click="$emit('closeTY')">Пожалуйста!</button>
        </div>
    </div>
</template>

<script>
export default {
}
</script>
<style scoped>
    .ty {
        max-width: 600px;
        width: 80%;
        height: 400px;
        border-radius: 15px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        background-color: var(--mainColor);
        flex-direction: column;
    }

    .ty-wrapper {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        background-color: rgba(0,0,0,.75)
    }

    h1 {
        font-size: 36px;
    }

    button {
        padding: 10px 20px;
        justify-self: flex-end;
        background: var(--white);
        color: var(--mainColor);
        font-family: sans-serif;
        border: none;
        cursor: pointer;
        border-radius: 15px;
        font-size: 25px;
        bottom: 35px;
        position: absolute;
    }

</style>