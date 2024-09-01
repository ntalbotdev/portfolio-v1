<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGithub,
  faCodepen,
  faLinkedinIn,
  faXTwitter,
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
      resumeLink: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    resumeLink() {
      return this.$i18n.locale === "fr"
        ? "/resume_fr.pdf"
        : "/resume_en.pdf";
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

      <div class="header--right">
        <router-link
          class="header__btn"
          to="/"
          @click.native="
            handleClick('contact');
            isOpen ? toggleSidebar() : null;
          "
        >
          {{ $t("header.button") }}
        </router-link>

        <LanguageSelector />

        <div
          class="hamburger-icon"
          :class="{ 'hamburger-icon--dark': (isOpen && !scrolled) || isOpen }"
          @click="toggleSidebar"
        >
          <div :class="{ active: isOpen }"></div>
          <div :class="{ active: isOpen }"></div>
          <div :class="{ active: isOpen }"></div>
        </div>
      </div>
    </div>

    <transition name="slideUp">
      <nav class="header__nav--hamburger" v-if="isOpen">
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
            <a class="nav__link" :href="resumeLink" target="_blank">
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
            href="https://x.com/ntalbotdev"
            target="_blank"
          >
            <FontAwesomeIcon :icon="faXTwitter" />
          </a>
          <a
            class="social__link"
            href="mailto:hello@ntalbot.dev"
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

.header {
  position: relative;
  user-select: none;
}

.header__inner {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0 $padding-lg;
  height: $header-height;
  z-index: 99;
  user-select: none;
  background-color: transparent;
  transition: background-color 0.5s;
}

.header__inner.scrolled {
  background-color: $accent-color;
  animation: slideUpDown 0.5s;
  transition: transform 0.5s;
}

.header--projects .header__inner {
  background-color: $accent-color;
  animation: none;
}

.header--projects.open .header__inner {
  background-color: transparent;
}

.logo__link {
  text-decoration: none;
}

.logo {
  font-family: "Sofia";
  font-size: 2.2rem;
  color: $secondary-color;
  letter-spacing: -0.5px;
  transition: color 0.3s;
  line-height: 1;
  user-select: none;
}

.logo--dark {
  color: $primary-color;
  transition-delay: 0.3s;
}

.header--right {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.header__btn {
  text-decoration: none;
  margin-right: $padding-md;
  padding: $padding-sm $padding-md;
  border-radius: 3px;
  color: $primary-color;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-out;

  &:hover {
    color: $secondary-color;
    cursor: pointer;
  }

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba($white, 0.65);
    left: 0;
    top: 0;
    z-index: -2;
    border-radius: 3px;
  }

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: $accent-color;
    left: 0;
    top: 100%;
    z-index: -1;
    transition: all 0.5s ease-out;
  }

  &:hover:before {
    top: 0;
  }
}

.header__nav--hamburger {
  background-color: rgba($secondary-color, 0.7);
  backdrop-filter: blur(4px);
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 98;

  @media all and (max-height: 520px) {
    flex-direction: row;
  }
}

.nav__list {
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: $padding-md;
  margin: 0 auto;

  @media all and (max-height: 520px) {
    margin-top: auto;
    margin-bottom: $padding-lg;
  }
}

.nav__link {
  display: flex;
  text-decoration: none;
  color: $primary-color;
  transition: color 0.3s ease-in-out;
  padding: 0 $padding-sm;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  &:hover .link__text {
    color: $accent-color;
    transition: color 0.3s ease-out;
  }

  & .link__text {
    display: inline-block;
    position: relative;
    font-weight: 700;
    font-size: 3rem;
    transition: color 0.3s ease-out;

    @media all and (max-height: 520px) {
      font-size: 1.8rem;
    }
  }
}

.nav__socials {
  display: flex;
  justify-content: center;
  margin-top: $padding-lg;

  @media all and (max-height: 520px) {
    flex-direction: column;
    position: absolute;
    right: $padding-lg;
    bottom: $padding-lg;
  }
}

.social__link {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: $padding-md;
  color: $secondary-color;
  background-color: $primary-color;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  transition: background-color 0.3s;

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }

  &:hover {
    background-color: $accent-color;
    transition: background-color 0.3s;
  }

  @media all and (max-height: 520px) {
    margin-right: unset;
    margin-bottom: $padding-md;
  }
}

.hamburger-icon {
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
  }
}

.hamburger-icon--dark div.active {
  background-color: $primary-color;
}

.hamburger-icon div {
  width: 30px;
  height: 2px;
  background-color: $secondary-color;
  margin: 4px 0;
  transition: all 0.3s;

  &.active {
    transition-delay: 0.3s;
  }

  &.active:nth-child(1) {
    transform: translateY(10px) rotate(45deg);
    transition: all 0.3s;
  }

  &.active:nth-child(2) {
    opacity: 0;
    width: 0;
  }

  &.active:nth-child(3) {
    transform: translateY(-10px) rotate(-45deg);
  }
}
</style>
