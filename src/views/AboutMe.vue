<template>
  <section class="about">
    <div class="section__inner about__inner">
      <h2 class="section__title about__title">{{ $t("about.title") }}</h2>
      <p class="about__text">
        {{ $t("about.text[0]") }}
      </p>
      <p class="about__text">{{ $t("about.text[1]") }}</p>
    </div>

    <!-- FRONT-END -->
    <div class="section__inner about__inner">
      <h2 class="section__title about__title">{{ $t("about.skills") }}</h2>
      <div class="skillset-wrapper">
        <div class="skillset">
          <h3 class="skillset__title">{{ $t("about.skillsetTitle[0]") }}</h3>
          <ul class="skillset__list skillset__list--tools">
            <li class="skillset__list-item">
              <img src="/images/icons/html.svg" alt="HTML" />
              <span class="skillset__list-text">HTML</span>
            </li>
            <li class="skillset__list-item">
              <img src="/images/icons/sass.svg" alt="SCSS" />
              <span class="skillset__list-text">SCSS</span>
            </li>
            <li class="skillset__list-item skillset__list-item--rounded">
              <img src="/images/icons/javascript.svg" alt="JavaScript" />
              <span class="skillset__list-text">JavaScript</span>
            </li>
            <li class="skillset__list-item skillset__list-item--rounded">
              <img src="/images/icons/typescript.svg" alt="TypeScript" />
              <span class="skillset__list-text">TypeScript</span>
            </li>
            <li class="skillset__list-item">
              <img src="/images/icons/vue.svg" alt="Vue.js" />
              <span class="skillset__list-text">Vue.js</span>
            </li>
            <li class="skillset__list-item">
              <img src="/images/icons/nuxt.svg" alt="Nuxt" />
              <span class="skillset__list-text">Nuxt</span>
            </li>
            <li class="skillset__list-item">
              <img src="/images/icons/tailwindcss.svg" alt="Tailwind CSS" />
              <span class="skillset__list-text">Tailwind CSS</span>
            </li>
          </ul>
        </div>

        <!-- BACK-END & APIS -->
        <div class="skillset">
          <h3 class="skillset__title">{{ $t("about.skillsetTitle[1]") }}</h3>
          <ul class="skillset__list skillset__list--tools">
            <li class="skillset__list-item">
              <img src="/images/icons/nodejs.svg" alt="Node.js" />
              <span class="skillset__list-text">Node.js</span>
            </li>
            <li class="skillset__list-item">
              <img src="/images/icons/expressjs.svg" alt="Express.js" />
              <span class="skillset__list-text">Express.js</span>
            </li>
            <li class="skillset__list-item">
              <img src="/images/icons/json.svg" alt="REST API" />
              <span class="skillset__list-text">REST API</span>
            </li>
            <li class="skillset__list-item">
              <img src="/images/icons/strapi.svg" alt="Strapi" />
              <span class="skillset__list-text">Strapi</span>
            </li>
            <li class="skillset__list-item">
              <img src="/images/icons/supabase.svg" alt="Supabase" />
              <span class="skillset__list-text">Supabase</span>
            </li>
            <li class="skillset__list-item">
              <img src="/images/icons/postgresql.svg" alt="PostgreSQL" />
              <span class="skillset__list-text">PostgreSQL</span>
            </li>
          </ul>
        </div>

        <!-- TOOLS & PLATFORMS -->
        <div class="skillset">
          <h3 class="skillset__title">{{ $t("about.skillsetTitle[2]") }}</h3>
          <ul class="skillset__list skillset__list--tools">
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
              <img src="/images/icons/vercel.svg" alt="Vercel" />
              <span class="skillset__list-text">Vercel</span>
            </li>
            <li class="skillset__list-item">
              <img src="/images/icons/cloudflare.svg" alt="Cloudflare" />
              <span class="skillset__list-text">Cloudflare</span>
            </li>
            <li class="skillset__list-item">
              <img src="/images/icons/seo.svg" alt="SEO" />
              <span class="skillset__list-text">SEO</span>
            </li>
          </ul>
        </div>

        <!-- CERTIFICATIONS -->
        <div class="skillset">
          <h3 class="skillset__title">{{ $t("about.skillsetTitle[3]") }}</h3>
          <ul class="skillset__list">
            <li class="skillset__list-item">
              <a class="skillset__list-link" href="">
                {{ $t("about.certificates[0]") }}
              </a>
            </li>
          </ul>
        </div>

        <!-- SOFT SKILLS -->
        <div class="skillset">
          <h3 class="skillset__title">{{ $t("about.skillsetTitle[4]") }}</h3>
          <ul class="skillset__list">
            <li class="skillset__list-item">
              <p class="skillset__list-text">
                {{ $t("about.softSkills") }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
