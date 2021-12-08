<template>
  <div class="projectPreview" @mouseenter="onEnter" @mouseleave="onLeave">
    <h3 class="title">{{ project.title }}</h3>
    <carousel
      :autoplay="true"
      :loop="true"
      :perPage="1"
      :autoplayTimeout="3000"
      paginationColor="#AAA"
      :speed="1000"
      :paginationEnabled="false"
    >
      <slide v-for="idx in 3" :key="idx">
        <div class="preview-front">
          <img
            class="proj-img"
            :src="require(`@/assets/projs/${project.title}-${idx}.png`)"
          />
          <div class="preview-hover col" :style="style">
            <div class="skills-container">
              <div
                class="skill"
                v-for="(skill, idx) in project.skills"
                :key="idx"
              >
                {{ skill }}
              </div>
            </div>
            <button class="btn-open" @click="openProject(project.websiteUrl)">
              go website
            </button>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import './ProjectPreview.scss';
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'ProjectPreview',
  props: {
    project: {
      type: Object,
    },
  },
  data() {
    return {
      style: {
        opacity: 0,
      },
    };
  },
  methods: {
    onEnter() {
      this.style.opacity = 1;
    },
    onLeave() {
      this.style.opacity = 0;
    },
    openProject(url) {
      window.open(url);
    },
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>
