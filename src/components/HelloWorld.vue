<template>
  <img src="./icons/Group 11.png" @click="changeTheme"><img>
</template>

<script>
export default {
  
  methods: {
      changeTheme() {
  if (document.body.classList.contains('light-theme')) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  }
}
}
}
</script>

<style>

:root {
--color-background-light: #ffffff;
--color-background-dark: #000000;
--color-text-light: #000000;
--color-text-dark: #ffffff;
}

body.light-theme {
background-color: var(--color-background-light);
color: var(--color-text-light);
}

body.dark-theme {
background-color: var(--color-background-dark);
color: var(--color-text-dark);
}
</style>