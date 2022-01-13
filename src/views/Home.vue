<template>
  <div class="home">
    <Header :currSection="currSection" :isPhone="isPhone" />
    <Observer @on-change="onChange($event, 'hero')">
      <Hero />
    </Observer>
    <main class="main">
      <Observer @on-change="onChange($event, 'projects')">
        <ProjectsList :isPhone="isPhone" />
      </Observer>
      <Observer @on-change="onChange($event, 'about')">
        <About />
      </Observer>
      <Observer @on-change="onChange($event, 'skills')">
        <Skills />
      </Observer>
      <Observer @on-change="onChange($event, 'contact')">
        <Contact />
      </Observer>
    </main>
  </div>
</template>

<script>
import './Home.scss';
import Header from '../components/Header/Header.vue';
import Hero from '../components/Hero/Hero.vue';
import ProjectsList from '../components/ProjectsList/ProjectsList.vue';
import About from '../components/About/About.vue';
import Skills from '../components/Skills/Skills.vue';
import Contact from '../components/Contact/Contact.vue';
import Observer from 'vue-intersection-observer';
export default {
  name: 'Home',
  created() {
    this.currSection = this.$route.hash.split('#')[1];
    window.addEventListener('resize', () => {
      this.isPhone = window.innerWidth <= 600;
    });
  },
  data() {
    return {
      currSection: 'hero',
      isPhone: window.innerWidth <= 600,
    };
  },
  methods: {
    onChange(entry, section) {
      if (entry.isIntersecting) {
        if (section !== this.currSection) {
          this.currSection = section;
        }
      }
    },
  },
  components: {
    Header,
    Hero,
    ProjectsList,
    About,
    Skills,
    Contact,
    Observer,
  },
};
</script>
