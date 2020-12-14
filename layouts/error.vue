<template>
  <div class="error-page">
      <div class="message">
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink class="message__link" to="/">
      Вернуться на главную
    </NuxtLink>
  </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: 'Это ошибка 404 :(',
      otherError: 'Ух, кажется что-то пошло не так'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.error-page {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>
