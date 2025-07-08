<template>
	<div class="projects-btn--wrapper">
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

<style lang="scss" scoped>
.projects-btn--wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: $header-height;
}

.projects-btn {
	font-family: 'Moderustic', sans-serif; // modern, clean font
  display: inline-block;
  padding: $padding-md $padding-lg;
  font-size: 1.2rem;
  font-weight: 600;
  color: $secondary-color;
  background: $accent-color;
  border: none;
  text-decoration: none;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: $accent-color-dark;
    transform: translateY(-2px);
  }

  &:active {
    background: $accent-color-darker;
    transform: translateY(0);
  }
}

.projects-btn svg {
  margin-right: $padding-sm; // space between icon and text
}
</style>
