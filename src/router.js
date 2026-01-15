import { createWebHistory, createRouter } from "vue-router";
import { watch } from 'vue';
import i18n from './i18n/i18n.js';
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
  scrollBehavior(to, from, savedPosition) {
    // if the user used back/forward, respect that
    if (savedPosition) {
      return savedPosition
    }
    // only scroll to top on this path
    if (to.path === '/projects') {
      return { left: 0, top: 0 }
    }
    // otherwise, don't change scroll position
    return false
  }
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