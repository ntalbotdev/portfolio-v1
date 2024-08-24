<script>
import emailjs from "@emailjs/browser";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import AlertModal from "../components/AlertModal.vue";

const isValidCaptcha = (value) => {
  return grecaptcha.getResponse() !== "";
};

const rules = {
  name: { required },
  email: { required, email },
  subject: { required },
  message: { required },
};

export default {
  setup() {
    const v$ = useVuelidate();
    return { v$ };
  },
  components: { AlertModal },
  data() {
    return {
      formSendSuccess: false,
      formSendError: false,
      isAlertVisible: false,
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  validations: rules,
  mounted() {
    grecaptcha.render("form__recaptcha", {
      sitekey: process.env.VUE_APP_RECAPTCHA_SITE_KEY,
      callback: "",
    });
  },
  methods: {
    sendEmail() {
      const recaptchaResponse = grecaptcha.getResponse();

      emailjs
        .sendForm(process.env.VUE_APP_EMAILJS_SERVICE, process.env.VUE_APP_EMAILJS_TEMPLATE_ID, this.$refs.form, {
          publicKey: process.env.VUE_APP_EMAILJS_PUBLIC_KEY,
          gRecaptchaResponse: recaptchaResponse,
        })
        .then(
          () => {
            this.formSendSuccess = !this.formSendSuccess;
            this.showAlert = !this.showAlert;
            this.resetForm();
            this.name = "";
            this.email = "";
            this.subject = "";
            this.message = "";
            console.log("SUCCESS!");
          },
          (error) => {
            this.formSendError = !this.formSendError;
            this.showAlert = !this.showAlert;
            console.log("FAILED...", error.text);
          }
        );
    },
    resetForm() {
      this.v$.$reset();
      grecaptcha.reset();
    },
    handleClose() {
      this.showAlert = false;
      this.formSendSuccess = false;
      this.formSendError = false;
    },
  },
  computed: {
    isFormValid() {
      return (
        !this.v$.name.$error &&
        !this.v$.email.$error &&
        !this.v$.subject.$error &&
        !this.v$.message.$error
      );
    },
  },
};
</script>

<template>
  <section class="contact">
    <div class="contact__inner">
      <h2 class="contact__title">{{ $t("contact.title") }}</h2>
      <p class="contact__text">
        {{ $t("contact.text") }}
      </p>

      <form class="contact__form" ref="form" @submit.prevent="sendEmail">
        <AlertModal
          type="success"
          :showAlert="isAlertVisible"
          v-if="formSendSuccess"
          @close="handleClose"
        >
        {{ $t("contact.modals.successText") }}
        </AlertModal>

        <AlertModal
          type="error"
          :showAlert="isAlertVisible"
          v-if="formSendError"
          @close="handleClose"
        >
        <span v-html="$t('contact.modals.errorText')"></span>
        </AlertModal>
        <input
          type="text"
          class="form__input"
          v-model="name"
          name="name"
          :placeholder="$t('contact.form.name')"
          autocomplete="on"
          @blur="v$.name.$touch()"
          :class="{
            'input-error': v$.name.$error,
            'input-valid': this.name !== '',
          }"
        />
        <input
          type="email"
          class="form__input"
          v-model="email"
          name="email"
           :placeholder="$t('contact.form.email')"
          autocomplete="on"
          @blur="v$.email.$touch()"
          :class="{
            'input-error': v$.email.$error,
            'input-valid': this.email !== '' && this.email.includes('@'),
          }"
        />
        <input
          type="text"
          class="form__input"
          v-model="subject"
          name="subject"
           :placeholder="$t('contact.form.subject')"
          autocomplete="off"
          @blur="v$.subject.$touch()"
          :class="{
            'input-error': v$.subject.$error,
            'input-valid': this.subject !== '',
          }"
        />
        <textarea
          class="form__textarea"
          v-model="message"
          name="message"
           :placeholder="$t('contact.form.message')"
          rows="6"
          autocomplete="off"
          @blur="v$.message.$touch()"
          :class="{
            'input-error': v$.message.$error,
            'input-valid': this.message !== '',
          }"
        />
        <div id="form__recaptcha"></div>

        <button type="submit" class="form__btn" :disabled="v$.$invalid">
          {{ $t("contact.form.submit") }}
        </button>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: $header-height;
}

.contact__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: $padding-lg;
  max-width: $max-width;
}

.contact__title {
  margin-bottom: $padding-md;
  font-size: 2.2rem;
  font-weight: 600;

  &:after {
    content: "";
    width: 100%;
    height: 3px;
    margin-top: $padding-xs;
    background-color: $accent-color;
    display: block;
  }
}

.contact__text {
  margin-bottom: $padding-lg;
  text-align: center;
  font-weight: 300;
}

.contact__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: center;
  gap: $padding-md;
  width: 300px;

  @media all and (max-width: 400px) {
    width: 100%;
  }

  @media all and (min-width: 768px) {
    width: 400px;
  }
}

.form__input {
  width: 100%;
  padding: $padding-md;
  border-radius: 3px;
  border: none;
  outline: none;
  color: $primary-color;
  font-size: 1rem;
  font-family: inherit;
}

.form__textarea {
  width: 100%;
  padding: $padding-md;
  border-radius: 3px;
  border: none;
  outline: none;
  resize: vertical;
  color: $primary-color;
  font-size: 1rem;
  font-family: inherit;
}

.form__input::placeholder,
.form__textarea::placeholder {
  opacity: 1;
}

.form__btn {
  width: 100%;
  padding: $padding-md;
  border-radius: 3px;
  font-size: 1rem;
  border: none;
  outline: none;
  background-color: $accent-color;
  color: $secondary-color;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
}

#form__recaptcha {
  @media only screen and (max-width: 500px) {
    transform: scale(0.875);
    transform-origin: 50% 0;
  }
}

.input-valid {
  outline: 2px solid $success-color;
  transition: outline 0.2s ease-in-out;
}

.input-error {
  outline: 2px solid $error-color;
  transition: outline 0.2s ease-in-out;
}

.alert-modal__text a {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid $secondary-color;

  &:hover {
    border-color: $accent-color;
    color: $accent-color;
  }
}
</style>
