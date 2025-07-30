<script>
import emailjs from "@emailjs/browser";
import vueRecaptcha from "vue3-recaptcha2";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import AlertModal from "../components/AlertModal.vue";

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
  components: { AlertModal, vueRecaptcha },
  data() {
    return {
      emailAddress: import.meta.env.VITE_EMAIL_ADDRESS,
      formSendSuccess: false,
      formSendError: false,
      isAlertVisible: false,
      name: "",
      email: "",
      subject: "",
      message: "",
      recaptchaSiteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
      recaptchaResponse: null,
    };
  },
  validations: rules,
  mounted() {
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js?render=" + this.recaptchaSiteKey;
    script.defer = true;
    document.head.appendChild(script);
  },
  methods: {
    onVerify(response) {
      this.recaptchaResponse = response;
    },
    sendEmail() {
      const recaptchaToken = this.recaptchaResponse;

      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          this.$refs.form,
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            gRecaptchaResponse: recaptchaToken,
          }
        )
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
      this.$refs.vueRecaptcha.resetRecaptcha();
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
      <h2 class="section__title contact__title">{{ $t("contact.title") }}</h2>
      <p class="contact__text">
        {{ $t("contact.text") }}
        <span class="contact__email-wrapper">
          <a class="contact__email" :href="`mailto:${emailAddress}`">
            {{ emailAddress }}
          </a>
        </span>
      </p>

      <form
        class="contact__form"
        ref="form"
        @submit.prevent="sendEmail"
        aria-labelledby="contact__title"
      >
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
          aria-required="true"
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
          aria-required="true"
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
          aria-required="true"
        />
        <textarea
          class="form__input form__input--textarea"
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
          aria-required="true"
        />
        <vue-recaptcha
          :sitekey="recaptchaSiteKey"
          ref="vueRecaptcha"
          :loadRecaptchaScript="true"
          @verify="onVerify"
          class="form__recaptcha"
        >
        </vue-recaptcha>

        <button type="submit" class="form__btn" :disabled="v$.$invalid">
          {{ $t("contact.form.submit") }}
        </button>
      </form>
    </div>
  </section>
</template>