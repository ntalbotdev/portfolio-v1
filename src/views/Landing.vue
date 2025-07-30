<script>
export default {
  data() {
    return {
      scrollY: 0,
    };
  },
  computed: {
    backgroundPositionY() {
      return `${this.scrollY * 0.5}px`; // Adjust the divisor for speed
    },
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY; // Update the scroll position
    },
    smoothScroll(section) {
      let targetElement = document.querySelector(`.${section}`);
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY; // Height of the header in pixels
      if (targetElement) {
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<template>
  <section class="landing" @scroll="handleScroll">
    <div
      class="parallax-bg"
      :style="{ backgroundPositionY: backgroundPositionY }"
    ></div>

    <transition appear>
      <div class="landing__inner">
        <p class="landing__text landing__text--big">{{ $t("landing.textBig") }}</p>
        <p class="landing__text" v-html="$t('landing.text[0]')"></p>
        <p class="landing__text">{{ $t("landing.text[1]") }}</p>
      </div>
    </transition>
    <div class="scroll-btn">
      <a class="scroll-btn__link" @click="smoothScroll('about')">
        <span></span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease, transform 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

</style>
