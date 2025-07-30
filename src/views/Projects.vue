<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projects from '../data/projects.js';
</script>

<template>
  <section class="projects">
    <div class="projects__inner">
      <h2 class="section__title projects__title">{{ $t("projects.title") }}</h2>

      <div class="projects__list">
        <div class="projects__card" v-for="project in projects[$i18n.locale]">
          <img
            class="projects__card-image"
            :src="project.imageUrl"
            :alt="project.title"
            v-if="project.imageUrl"
          />
          <h3 class="projects__card-title">{{ project.title }}</h3>
          <div class="projects__card-tags">
            <span class="projects__card-tag" v-for="tag in project.tags">
              {{ tag }}
            </span>
          </div>

          <div class="projects__card-description">
            <p>{{ project.description }}</p>
          </div>

          <div class="projects__card-links">
            <a
              class="projects__card-link projects__card-link--demo"
              :href="project.siteUrl"
              target="_blank"
              v-if="project.siteUrl"
            >
              {{ $t("projects.cardLinks.demo") }}
            </a>

            <a
              class="projects__card-link projects__card-link--github"
              :href="project.githubUrl"
              target="_blank"
              v-if="project.githubUrl"
            >
              <FontAwesomeIcon :icon="faGithub" /> {{ $t("projects.cardLinks.github") }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
