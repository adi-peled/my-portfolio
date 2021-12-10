<template>
  <header class="header flex">
    <!-- <img src="../../assets/ADIPELED.png" alt="" /> -->
    <div class="relative pointer">
      <Logo class="logo" @click="moveHome" />
      <a class="moveHome" href="#home"></a>
    </div>
    <ul class="flex">
      <a href="#home">Home</a>
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href="#contact">contact</a>
    </ul>
  </header>
</template>

<script>
import './Header.scss';
import Logo from '../../assets/logo.svg';
export default {
  name: 'Header',
  created() {
    addEventListener('scroll', this.onScroll);
  },
  mounted() {},
  methods: {
    onScroll() {},
    moveHome() {},
  },
  components: {
    Logo,
  },
};
</script>
