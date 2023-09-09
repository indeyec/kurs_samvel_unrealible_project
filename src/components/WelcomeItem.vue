<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Имя:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    submitForm() {
      // Здесь можно добавить логику отправки данных на сервер или выполнения других действий при отправке формы
      console.log('Форма отправлена');
    }
  }
};
</script>