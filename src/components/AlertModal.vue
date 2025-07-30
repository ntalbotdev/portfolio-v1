<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    showAlert: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
		isAlertVisible: true,
    };
  },
  methods: {
    closeAlert() {
      this.$emit("close");
    },
  },
  computed: {
    alertClass() {
      switch (this.type) {
        case "info":
          return "alert-modal alert-modal--info";
        case "success":
          return "alert-modal alert-modal--success";
        case "error":
          return "alert-modal alert-modal--error";
        default:
          return "alert-modal";
      }
    },
    iconSrc() {
      switch (this.type) {
        case "info":
          return "/images/icons/circle-info.svg";
        case "success":
          return "/images/icons/circle-check.svg";
        case "error":
          return "/images/icons/circle-xmark.svg"; 
        default:
          return "";
      }
    },
  },
};
</script>

<template>
  <div class="alert-modal__backdrop" v-if="isAlertVisible" v-show="isAlertVisible" role="alert">
    <div :class="alertClass">
      <div class="alert-modal__icon-wrapper">
        <img class="alert-modal__icon" :src="iconSrc" alt="" />
      </div>
      <p class="alert-modal__text">
        <slot></slot>
      </p>

      <button class="alert-modal__button" @click="closeAlert">{{ $t("modalClose") }}</button>
    </div>
  </div>
</template>