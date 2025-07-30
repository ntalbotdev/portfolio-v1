<template>
  <div class="language-selector">
    <button
      class="language-selector__btn"
      v-show="$i18n.locale === 'fr'"
      @click="$i18n.locale = 'en'"
    >
      en
    </button>
    <button
      class="language-selector__btn"
      v-show="$i18n.locale === 'en'"
      @click="$i18n.locale = 'fr'"
    >
      fr
    </button>
  </div>
</template>
