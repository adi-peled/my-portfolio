<template>
  <header class="header flex">
    <!-- <img src="../../assets/ADIPELED.png" alt="" /> -->
    <div class="relative pointer">
      <Logo class="logo" />
      <a class="moveHome" href="#home"></a>
    </div>
    <ul class="flex">
      <a href="#hero" :class="{ active: currSection === 'hero' }">Home</a>
      <a href="#projects" :class="{ active: currSection === 'projects' }"
        >Projects</a
      >
      <a href="#about" :class="{ active: currSection === 'about' }">About</a>
      <a href="#contact" :class="{ active: currSection === 'contact' }"
        >contact</a
      >
    </ul>
  </header>
</template>

<script>
import './Header.scss';
import Logo from '../../assets/logo.svg';
export default {
  name: 'Header',
  props: {
    currSection: {
      type: String,
      default: '',
    },
  },
  mounted() {},
  methods: {},
  components: {
    Logo,
  },
};
</script>
