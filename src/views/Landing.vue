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

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease, transform 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.landing {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.parallax-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("/images/landing-bg.jpg") no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  will-change: transform; /* Improves performance */

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(darken($accent-color, 50%), 0.2);
  }
}

.landing__inner {
  color: $white;
  padding: 0 $padding-md;
  display: block;
  text-align: center;
  position: relative;
  max-width: 750px;
}

.landing__text {
  display: inline;
  font-weight: 300;
  font-size: 1.8rem;
  text-shadow: 1px 1px $black;

  & span {
    color: $accent-color;
    font-weight: 600;
  }
}

.landing__text--big {
  display: block;
  margin-bottom: $padding-xs;
  font-size: 2.9rem;
  line-height: 1;
  font-weight: 400;
  text-shadow: 2px 2px $black;

  @media all and (min-width: 768px) {
    font-size: 4rem;
  }
}

.scroll-btn {
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  animation: MoveUpDown 3s ease-in-out infinite;

  @media all and (max-height: 520px) {
    display: none;
  }

  @keyframes MoveUpDown {
    0%,
    100% {
      bottom: 0;
    }
    50% {
      bottom: $padding-md;
    }
  }
}

.scroll-btn a {
  padding-top: 100px;

  &:hover {
    cursor: pointer;
  }
}

.scroll-btn a span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 30px;
  height: 50px;
  margin-left: -15px;
  border: 2px solid $white;
  border-radius: 50px;
}

.scroll-btn a span:before {
  position: absolute;
  top: 10px;
  left: 50%;
  content: "";
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: $white;
  border-radius: 100%;
  box-sizing: border-box;
}

.scroll-btn a span::after {
  position: absolute;
  bottom: -18px;
  left: 50%;
  width: 18px;
  height: 18px;
  content: "";
  margin-left: -9px;
  border-left: 1px solid $white;
  border-bottom: 1px solid $white;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  box-sizing: border-box;
}
</style>

<style lang="scss">
.landing__text span {
  color: $accent-color;
  font-weight: 600;
}
</style>
