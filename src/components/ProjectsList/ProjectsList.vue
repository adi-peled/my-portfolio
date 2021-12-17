<template>
  <section class="projectsList" id="projects">
    <h2 class="title">Projects</h2>
    <div class="list wrap justify-center">
      <ProjectPreview
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script>
import './ProjectsList.scss';
import { projectsService } from '../../services/projectsService';
import ProjectPreview from '../ProjectPreview/ProjectPreview';
export default {
  name: 'ProjectsList',
  data() {
    return {
      projects: [],
    };
  },
  created() {
    this.projects = projectsService.getProjects();
  },
  components: {
    ProjectPreview,
  },
};
</script>
