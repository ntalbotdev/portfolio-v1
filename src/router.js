import { createWebHistory, createRouter } from "vue-router";
import i18n from './i18n/i18n.js';
import { watch } from 'vue'
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: i18n.global.t('header.metaTitle'),
      titleKey: 'header.metaTitle'
    },
  },
  {
    path: '/projects',
    component: Projects,
    meta: {
      title: i18n.global.t('projects.title'),
      titleKey: 'projects.title'
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Nicolas Talbot - ${to.meta.title}`;

  if (!to.matched.length) {
    next('/') // redirect to root domain
  } else {
    next()
  }
});

watch(() => i18n.global.locale, () => {
  const currentRoute = router.currentRoute.value
  document.title = `Nicolas Talbot - ${i18n.global.t(currentRoute.meta.titleKey)}`
})

export default router;