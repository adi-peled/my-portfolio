<template>
  <header class="header flex">
    <!-- <img src="../../assets/ADIPELED.png" alt="" /> -->
    <div>
      <Logo class="logo" />
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
  components: {
    Logo,
  },
};
</script>
