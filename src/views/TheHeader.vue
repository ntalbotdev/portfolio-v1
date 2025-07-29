<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGithub,
  faCodepen,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import LanguageSelector from "@/components/LanguageSelector.vue";
</script>

<script>
export default {
  data() {
    return {
      isOpen: false,
      scrolled: false,
      emailAddress: import.meta.env.VITE_EMAIL_ADDRESS,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    resumeUrl() {
      return `/resume_${this.$i18n.locale}.pdf`;
    },
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
    handleScroll() {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      this.scrolled = scrollPosition >= viewportHeight;
    },
    smoothScroll(section) {
      let targetElement = document.querySelector(`.${section}`);
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      if (targetElement) {
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    },
    handleClick(section) {
      if (this.$route.path !== "/") {
        this.$router.push({ path: "/" }).then(() => {
          this.$nextTick(() => {
            this.smoothScroll(section);
          });
        });
      } else {
        this.$nextTick(() => {
          this.smoothScroll(section);
        });
      }
    },
    changeLanguage(newLocale) {
      locale.value = newLocale;
    },
  },
};
</script>

<template>
  <header
    class="header"
    :class="{ 'header--projects': $route.path === '/projects', open: isOpen }"
  >
    <div class="header__inner" :class="{ scrolled: scrolled && !isOpen }">
      <router-link
        class="logo__link"
        to="/"
        @click.native="
          handleClick('landing');
          isOpen ? toggleSidebar() : null;
        "
      >
        <h1
          class="logo"
          :class="{ 'logo--dark': (isOpen && !scrolled) || isOpen }"
        >
          nt
        </h1>
      </router-link>

      <div class="header__right">
        <a
          class="header__btn"
          href="https://github.com/ntalbotdev"
          target="_blank"
          title="github.com/ntalbotdev"
        >
          <FontAwesomeIcon :icon="faGithub" />
          ntalbotdev
        </a>

        <LanguageSelector />

        <div
          class="header__nav-hamburger-icon"
          :class="{ 'header__nav-hamburger-icon--dark': (isOpen && !scrolled) || isOpen }"
          @click="toggleSidebar"
        >
          <div :class="{ active: isOpen }"></div>
          <div :class="{ active: isOpen }"></div>
          <div :class="{ active: isOpen }"></div>
        </div>
      </div>
    </div>

    <transition name="slideUp">
      <nav class="header__nav-hamburger" v-if="isOpen">
        <ul class="nav__list">
          <li class="nav__item">
            <router-link
              class="nav__link"
              to="/"
              @click.native="
                handleClick('landing');
                toggleSidebar();
              "
            >
              <span class="link__text">{{ $t("header.nav.home") }}</span>
            </router-link>
          </li>
          <li class="nav__item">
            <router-link
              class="nav__link"
              to="/"
              @click.native="
                handleClick('about');
                toggleSidebar();
              "
            >
              <span class="link__text">{{ $t("header.nav.about") }}</span>
            </router-link>
          </li>
          <li class="nav__item">
            <router-link
              class="nav__link"
              to="/projects"
              @click.native="toggleSidebar()"
            >
              <span class="link__text">{{ $t("header.nav.projects") }}</span>
            </router-link>
          </li>
          <li class="nav__item">
            <a class="nav__link" :href="resumeUrl" target="_blank">
              <span class="link__text">{{ $t("header.nav.resume") }}</span>
            </a>
          </li>
          <li class="nav__item">
            <router-link
              class="nav__link"
              to="/"
              @click.native="
                handleClick('contact');
                toggleSidebar();
              "
            >
              <span class="link__text">{{ $t("header.nav.contact") }}</span>
            </router-link>
          </li>
        </ul>

        <div class="nav__socials">
          <a
            class="social__link"
            href="https://github.com/ntalbotdev"
            target="_blank"
          >
            <FontAwesomeIcon :icon="faGithub" />
          </a>
          <a
            class="social__link"
            href="https://codepen.io/ntalbotdev"
            target="_blank"
          >
            <FontAwesomeIcon :icon="faCodepen" />
          </a>
          <a
            class="social__link"
            href="https://www.linkedin.com/in/nicolas-talbot"
            target="_blank"
          >
            <FontAwesomeIcon :icon="faLinkedinIn" />
          </a>
          <a
            class="social__link"
            :href="`mailto:${emailAddress}`"
            target="_blank"
          >
            <FontAwesomeIcon :icon="faEnvelope" />
          </a>
        </div>
      </nav>
    </transition>
  </header>
</template>

<style lang="scss" scoped>
@keyframes slideUpDown {
  0% {
    transform: translateY(-100%);
  }
}

.slideUp-enter-active,
.slideUp-leave-active {
  transition-property: transform, opacity;
  transition-duration: 0.5s;
}

.slideUp-enter-from,
.slideUp-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
