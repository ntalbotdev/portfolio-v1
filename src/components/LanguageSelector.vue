<template>
  <div class="language-selector">
    <button
      class="language-selector__btn"
      v-show="$i18n.locale === 'fr'"
      @click="$i18n.locale = 'en'"
    >
	<img src="/images/icons/flag-uk.svg" alt="EN" title="English" />
    </button>
    <button
      class="language-selector__btn"
      v-show="$i18n.locale === 'en'"
      @click="$i18n.locale = 'fr'"
    >
      <img src="/images/icons/flag-fr.svg" alt="FR" title="Français" />
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
	outline: 0;
	border: 0;
	background: none;
	transition: opacity 0.3s;

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
