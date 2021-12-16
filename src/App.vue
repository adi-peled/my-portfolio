<template>
  <div id="app">
    <!-- <Header /> -->

    <Home />
    <!-- <router-view /> -->
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import Home from './views/Home.vue';
export default {
  components: {
    Header,
    Home,
  },
};
</script>
