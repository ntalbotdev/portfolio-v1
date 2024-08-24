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
        // add more cases as needed
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
        // add more cases as needed
        default:
          return "";
      }
    },
  },
};
</script>

<template>
  <div class="alert-modal__backdrop" v-if="isAlertVisible" v-show="isAlertVisible">
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

<style lang="scss" scoped>
.alert-modal__backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba($black, 0.5);
  z-index: 100;
}

.alert-modal {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: $padding-lg;
  max-width: $max-width;
  background-color: $primary-color;
  border-radius: 6px;
  width: calc(100% - $padding-lg * 2);
  max-width: 500px;
}

.alert-modal__icon-wrapper {
  display: flex;
  position: relative;
  padding: $padding-lg;
}

.alert-modal__icon {
  width: 100px;
  position: absolute;
  top: -60px;
  transform: translateX(-50%);
}

.alert-modal__text {
  color: $secondary-color;
  font-size: 1.2rem;
  text-align: center;
}

.alert-modal__button {
  width: 50%;
  margin-top: $padding-lg;
  border: 0;
  outline: 0;
  background-color: $accent-color;
  color: $secondary-color;
  font-size: 1.2rem;
  font-weight: 600;
  padding: $padding-md;
  border-radius: 3px;
  transition: background-color 0.3s;

  &:hover {
    transition: background-color 0.3s;
    cursor: pointer;
  }
}

.alert-modal--info {
  .alert-modal__button {
    background-color: $info-color;
    color: $secondary-color;

    &:hover {
      background-color: rgba($info-color, 0.7);
    }
  }
}

.alert-modal--success {
  .alert-modal__button {
    background-color: $success-color;
    color: $primary-color;

    &:hover {
      background-color: rgba($success-color, 0.7);
    }
  }
}

.alert-modal--error {
  .alert-modal__button {
    background-color: $error-color;
    color: $primary-color;

    &:hover {
      background-color: rgba($error-color, 0.7);
    }
  }
}
</style>

<style lang="scss">
.alert-modal__text a {
  color: $secondary-color;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    border-bottom: 1px solid $secondary-color;
  }
}
</style>