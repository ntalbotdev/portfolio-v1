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

<style lang="scss" scoped>
.language-selector {
  margin-right: $padding-md;
  display: flex;
  align-items: center;
}

.language-selector__btn {
  display: flex;
  justify-content: center;
  outline: 0;
  border: 0;
  background: rgba($secondary-color, 0.75);
  transition: opacity 0.3s;
  padding: $padding-sm;
  font-size: 1rem;
  color: $primary-color;
  border-radius: 3px;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s;
  }
}

img {
  height: 30px;
}
</style>
