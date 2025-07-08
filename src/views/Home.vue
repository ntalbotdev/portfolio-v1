<script>
import { defineAsyncComponent } from "vue";
import Landing from "./Landing.vue";

export default {
  components: {
    Landing,
    AboutMe: defineAsyncComponent(() => import("./AboutMe.vue")),
    ContactForm: defineAsyncComponent(() => import("./ContactForm.vue")),
    ProjectsButton: defineAsyncComponent(() => import("../components/ProjectsButton.vue")),
  },
};
</script>

<template>
    <Landing />
    <AboutMe />
    <ProjectsButton />
    <ContactForm />
</template>
