

<template>
  
  <img src="./icons/Group 11.png" @click="changeTheme">
</template>

<script>
export default {
  data() {
    return {
      darkTheme: false,
      images: {
        light:'./icons/Group 11.png',
        dark: './icons/Group 10.png',
      },
    };
  },
  computed: {
    currentImage() {
      return this.darkTheme ? this.images.dark : this.images.light;
    },
  },
  methods: {
    changeTheme() {
      this.darkTheme = !this.darkTheme;
      document.body.classList.toggle('light-theme');
      document.body.classList.toggle('dark-theme');
    },
  },
};
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