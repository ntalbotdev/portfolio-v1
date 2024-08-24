<template>
  <section class="about">
    <div class="about__inner">
      <h2 class="about__title">{{ $t("about.title") }}</h2>
      <p class="about__text">
        {{ $t("about.text[0]") }}
      </p>
      <p class="about__text">{{ $t("about.text[1]") }}</p>
    </div>

    <div class="about__inner">
      <h2 class="about__title">{{ $t("about.skills") }}</h2>
      <div class="skillset__wrapper">
        <div class="skillset">
          <h3 class="skillset__title">{{ $t("about.skillsetTitle[0]") }}</h3>
          <ul class="skillset__list">
            <li class="skillset__list-item">
              <img src="/images/icons/html.svg" alt="HTML" />
              <span class="skillset__list-text">HTML</span>
            </li>
            <li class="skillset__list-item">
              <img src="/images/icons/css.svg" alt="CSS" />
              <span class="skillset__list-text">CSS</span>
            </li>
            <li class="skillset__list-item">
              <img src="/images/icons/javascript.svg" alt="JavaScript" />
              <span class="skillset__list-text">JavaScript</span>
            </li>
            <li class="skillset__list-item">
              <img src="/images/icons/vuejs.svg" alt="Vue.js" />
              <span class="skillset__list-text">Vue.js</span>
            </li>
            <li class="skillset__list-item">
              <img src="/images/icons/react.svg" alt="React" />
              <span class="skillset__list-text">React</span>
            </li>
            <li class="skillset__list-item">
              <img src="/images/icons/sass.svg" alt="Sass" />
              <span class="skillset__list-text">Sass</span>
            </li>
          </ul>
        </div>

        <div class="skillset">
          <h3 class="skillset__title">{{ $t("about.skillsetTitle[1]") }}</h3>
          <ul class="skillset__list">
            <li class="skillset__list-item">
              <img src="/images/icons/figma.svg" alt="Figma" />
              <span class="skillset__list-text">Figma</span>
            </li>
            <li class="skillset__list-item">
              <img src="/images/icons/git.svg" alt="Git" />
              <span class="skillset__list-text">Git</span>
            </li>
            <li class="skillset__list-item">
              <img src="/images/icons/github.svg" alt="GitHub" />
              <span class="skillset__list-text">GitHub</span>
            </li>
            <li class="skillset__list-item">
              <img src="/images/icons/wordpress.svg" alt="Wordpress" />
              <span class="skillset__list-text">Wordpress</span>
            </li>
            <li class="skillset__list-item">
              <img src="/images/icons/cloudflare.svg" alt="Cloudflare" />
              <span class="skillset__list-text">Cloudflare</span>
            </li>
            <li class="skillset__list-item">
              <img src="/images/icons/seo.svg" alt="SEO" />
              <span class="skillset__list-text">SEO</span>
            </li>
            <li class="skillset__list-item">
              <img src="/images/icons/vscode.svg" alt="VS Code" />
              <span class="skillset__list-text">VS Code</span>
            </li>
          </ul>
        </div>

        <div class="skillset">
          <h3 class="skillset__title">{{ $t("about.skillsetTitle[2]") }}</h3>
          <ul class="skillset__list--large">
            <li class="skillset__list-item">
              <a class="skillset__list-link" href="">{{ $t("about.certificates[0]") }}</a>
            </li>
          </ul>
        </div>

        <div class="skillset">
          <h3 class="skillset__title">{{ $t("about.skillsetTitle[3]") }}</h3>
          <ul class="skillset__list--large">
            <li class="skillset__list-item">
              <p>
                {{ $t("about.softSkills") }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: $header-height;
}

.about__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: calc($padding-lg * 2);
  padding: $padding-lg;
  max-width: $max-width;

  &:last-child {
    margin-bottom: 0;
  }
}

.about__title {
  margin-bottom: $padding-md;
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

.about__text {
  text-align: center;
  font-size: 1.1rem;
  font-weight: 300;

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }

  &:last-child {
    margin-top: $padding-sm;
    font-weight: 500;
  }
}

.skillset__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.skillset {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: $padding-lg;

  &:last-child {
    margin-bottom: 0;
  }
}

.skillset__title {
  margin-bottom: $padding-md;
  font-size: 1.5rem;
  font-weight: 600;
}

.skillset__list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: $padding-md;
}

.skillset__list .skillset__list-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $primary-color-dark;
  width: 110px;
  height: 110px;
  border-radius: 6px;
}

.skillset__list .skillset__list-item svg,
.skillset__list .skillset__list-item img {
  width: 35px;
  height: 35px;
  color: $accent-color;
}

.skillset__list-text {
  margin-top: $padding-sm;
  font-weight: 400;
  font-size: 0.9rem;
}

.skillset__list--large {
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: $padding-sm;
  text-align: center;

  p {
    font-weight: 300;
  }

  .skillset__list-link {
    text-decoration: none;
    color: $secondary-color;
    font-weight: 300;

    &:hover {
      color: $accent-color;
      border-bottom: 1px solid $accent-color;
    }
  }
}
</style>
