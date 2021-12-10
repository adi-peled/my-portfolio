<template>
  <div class="home">
    <Header :currSection="currSection" />
    <main class="main">
      <Observer @on-change="onChange($event, 'hero')" class="test-lazy">
        <Hero />
      </Observer>
      <Observer @on-change="onChange($event, 'projects')" class="test-lazy">
        <ProjectsList />
      </Observer>
      <Observer @on-change="onChange($event, 'about')" class="test-lazy">
        <About />
      </Observer>
      <Observer @on-change="onChange($event, 'contact')" class="test-lazy">
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
import Contact from '../components/Contact/Contact.vue';
import Observer from 'vue-intersection-observer';
export default {
  name: 'Home',
  created() {},
  data() {
    return {
      currSection: 'hero',
    };
  },
  methods: {
    onChange(entry, section) {
      if (entry.isIntersecting) {
        if (section !== this.currSection) {
          this.$router.push(`/#${section}`);
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
    Contact,
    Observer,
  },
};
</script>
