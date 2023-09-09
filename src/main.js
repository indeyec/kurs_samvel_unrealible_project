import './assets/main.css'

import Vue from 'vue';
import App from './App.vue';
import router from '../router/router';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router, // Подключаем маршрутизацию к приложению
}).$mount('#app');


// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
