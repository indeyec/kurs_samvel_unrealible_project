<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Generate from './components/Generate.vue'
</script>

<template>
  <header>
      <HelloWorld />
  </header>

  <main>
    <TheWelcome />
  </main>
  <footer>
    <Generate />
  </footer>
</template>

<style scoped>
header{
  margin-left: 10px;
  
}
</style> -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // Логика корневого компонента App
};
</script>