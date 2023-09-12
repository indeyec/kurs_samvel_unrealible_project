<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="main">
		<p class="text_top">Регистрация</p>
		<p class="text_bot">Убедитесь, что вы правильно заполнили все поля</p>
		<input type="text" placeholder="Ваше имя" id="name" v-model="name" required>
		<input type="text" placeholder="Ваш номер телефона"   id="number" v-model="number" required>
		<input type="text" placeholder="Дата вашего рождения"  id="data" v-model="data" required>
		<input type="text" placeholder="Ваша почта"  id="email" v-model="email" required>
		<input type="text" placeholder="Пароль"  id="password" v-model="password" required>
		<button type="submit" class="btn">Сохранить</button>
	</div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      number: '',
      data: '',
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