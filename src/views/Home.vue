<template>
  <section class="home">
    <Hero />
    <ProjectsList />
    <About />
    <Contact />
  </section>
</template>

<script>
import './Home.scss';
import Header from '../components/Header/Header.vue';
import Hero from '../components/Hero/Hero.vue';
import ProjectsList from '../components/ProjectsList/ProjectsList.vue';
import About from '../components/About/About.vue';
import Contact from '../components/Contact/Contact.vue';
export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    ProjectsList,
    About,
    Contact,
  },
};
</script>
