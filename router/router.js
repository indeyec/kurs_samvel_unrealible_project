import Vue from 'vue';
import VueRouter from 'vue-router';

import DarkTema from '../src/components/DarkTema.vue'
// import TheWelcome from '../src/components/TheWelcome.vue'
// import Generate from '../src/components/Generate.vue'
// import Generate from '../src/components/Generate.vue'
// import Generate from '../src/components/Generate.vue'
// import Generate from '../src/components/Generate.vue'
// import Generate from '../src/components/Generate.vue'
// import Generate from ''

Vue.use(VueRouter);

const routes = [
  { path: '/index.html', component: DarkTema },
  { path: '/login.html', component: About },
];

const router = new VueRouter({
  routes,
});

export default router;