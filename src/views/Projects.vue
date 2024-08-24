<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projects from '../data/projects.js';
</script>

<template>
  <section class="projects">
    <div class="projects__inner">
      <h2 class="projects__title">{{ $t("projects.title") }}</h2>

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

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: $header-height;
}

.projects__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: calc($padding-lg * 2);
  padding: $padding-lg;
  width: 100%;
}

.projects__title {
  margin-bottom: $padding-sm;
  font-size: 2.2rem;
  font-weight: 600;

  &:after {
    content: "";
    width: 100%;
    height: 3px;
    margin-top: $padding-xs;
    background-color: $accent-color;
    display: block;
  }
}

.projects__list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: $padding-md;
  width: 100%;
  max-width: $max-width;
  margin-top: $padding-md;

  @media all and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
}

.projects__card {
  display: flex;
  flex-direction: column;
  padding: $padding-lg;
  background: $primary-color-dark;
  border-radius: 6px;
  width: 100%;

  @media all and (min-width: 768px) {
    width: calc(50% - $padding-md);
  }

  @media all and (min-width: 1024px) {
    width: calc(33.33% - $padding-md);
  }
}

.projects__card-image {
  margin-bottom: $padding-md;
  border-radius: 3px;
}

.projects__card-title {
  margin-bottom: $padding-sm;
  font-size: 1.4rem;
  font-weight: 500;
}

.projects__card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25em;
}

.projects__card-tag {
  background-color: $primary-color;
  font-size: 0.85rem;
  padding: $padding-xs $padding-sm;
  border-radius: 3px;
  color: $secondary-color;
}

.projects__card-description {
  margin: $padding-lg 0;
  font-weight: 300;

  p {
    margin-bottom: $padding-sm;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.projects__card-links {
  display: flex;
  margin-top: auto;

  @media all and (max-width: 410px) {
    flex-direction: column;

    .projects__card-link {
      margin-right: 0;
      margin-bottom: $padding-sm;
    }
  }

  @media all and (min-width: 768px) {
    flex-direction: column;

    .projects__card-link {
      margin-right: 0;
      margin-bottom: $padding-sm;
    }
  }

  @media all and (min-width: 800px) {
    flex-direction: row;

    .projects__card-link--demo {
      margin-right: $padding-sm;
    }
  }

  @media all and (min-width: 1024px) {
    flex-direction: column;

    .projects__card-link--demo {
      margin-right: 0;
      margin-bottom: $padding-sm;
    }
  }
  @media all and (min-width: 1140px) {
    flex-direction: row;

    .projects__card-link--demo {
      margin-right: $padding-sm;
    }
  }
}

.projects__card-link {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  font-weight: 400;
  color: $secondary-color;
  text-decoration: none;
  background: red;
  padding: $padding-sm $padding-md;
  border-radius: 3px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: $accent-color-light;
  }

  &--demo {
    background-color: $accent-color;
    margin-right: $padding-sm;
  }

  &--github {
    background-color: $black;

    &:hover {
      background-color: lighten($black, 5%);
    }
  }

  svg {
    margin-right: $padding-sm;
  }
}
</style>
