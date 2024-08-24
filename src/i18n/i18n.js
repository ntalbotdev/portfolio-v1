import { createI18n } from 'vue-i18n'
import translations from './locales.js'

const i18n = createI18n({
	locale: navigator.language.split('-')[0],
	fallbackLocale: 'en',
	messages: translations
  })

export default i18n;