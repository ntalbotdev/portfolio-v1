<script>
import { defineAsyncComponent } from "vue";
import Landing from "./Landing.vue";

export default {
  components: {
    Landing,
    AboutMe: defineAsyncComponent(() => import("./AboutMe.vue")),
    ContactForm: defineAsyncComponent(() => import("./ContactForm.vue")),
  },
};
</script>

<template>
    <Landing />
    <AboutMe />
    <ContactForm />
</template>
