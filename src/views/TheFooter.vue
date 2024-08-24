<template>
  <footer class="footer">
    <p class="footer__text">&copy; 2024 Nicolas Talbot. {{  $t("footerRights") }}</p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: $padding-lg $padding-md;
  font-size: 0.9rem;
  text-align: center;
  background-color: $primary-color;
}
</style>
