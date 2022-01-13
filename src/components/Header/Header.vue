<template>
  <header class="header flex">
    <!-- <img src="../../assets/ADIPELED.png" alt="" /> -->
    <div class="relative pointer flex">
      <!-- <Logo class="logo" /> -->
      <img class="logo" src="../../assets/logo.png" alt="" />
      <a class="moveHome" href="#hero"></a>
    </div>
    <ul v-if="!isPhone || showMenu" :style="navStyle">
      <a
        @click="toggleMenu"
        href="#hero"
        :class="{ active: currSection === 'hero' }"
        >Home</a
      >
      <a
        @click="toggleMenu"
        href="#projects"
        :class="{ active: currSection === 'projects' }"
        >Projects</a
      >
      <a
        @click="toggleMenu"
        href="#about"
        :class="{ active: currSection === 'about' }"
        >About</a
      >
      <a
        @click="toggleMenu"
        href="#skills"
        :class="{ active: currSection === 'skills' }"
        >skills</a
      >
      <a
        @click="toggleMenu"
        href="#contact"
        :class="{ active: currSection === 'contact' }"
        >contact</a
      >
    </ul>
    <div v-if="isPhone" class="container">
      <div class="hamburger" @click="toggleMenu">
        <div class="line1" :style="style1"></div>
        <div class="line2" :style="style2"></div>
        <div class="line3" :style="style3"></div>
      </div>
    </div>
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
    isPhone: {
      type: Boolean,
    },
  },
  data() {
    return {
      showMenu: false,
      style1: {},
      style2: {},
      style3: {},

      navStyle: {},
    };
  },
  created() {
    this.resetStyle();
  },
  mounted() {},
  methods: {
    changedSection(section) {
      this.$emit('changedSection', section);
    },
    toggleMenu() {
      if (!this.isPhone) return;
      if (this.showMenu) {
        this.resetStyle();
      } else {
        this.style1 = {
          ...this.style1,
          transform: 'rotate(45deg)',
        };
        this.style3 = {
          ...this.style3,
          transform: 'rotate(-45deg)',
        };
        this.style2 = {
          opacity: 0,
        };
        this.navStyle = {
          right: 0,
          position: 'absolute',
          display: 'flex',
          'flex-direction': 'column',
          top: '55px',
          height: '100vh',
          'background-color': '#718e8e',
        };
      }
      this.showMenu = !this.showMenu;
    },
    resetStyle() {
      this.style1 = {
        height: '3px',
        'background-color': '#e5eded',
        '-webkit-transform-origin': 'left',
        'transform-origin': 'left',
        transition: 'all 1s ease',
      };
      this.style2 = {
        height: '3px',
        'background-color': '#e5eded',
        '-webkit-transform-origin': 'left',
        'transform-origin': 'left',
        transition: 'all 1s ease',
      };
      this.style3 = {
        height: '3px',
        'background-color': '#e5eded',
        '-webkit-transform-origin': 'left',
        'transform-origin': 'left',
        transition: 'all 1s ease',
      };
      this.navStyle = {
        display: 'flex',
      };
    },
  },
  components: {
    Logo,
  },
};
</script>
