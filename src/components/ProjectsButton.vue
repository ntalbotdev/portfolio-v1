<template>
	<div class="projects-btn-wrapper">
  <router-link to="/projects" class="projects-btn">
    {{ $t("projects.viewProjectsBtn") }}
  </router-link>
</div>
</template>

<script>
export default {
  name: "ProjectsButton"
};
</script>
