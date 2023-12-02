<template>
  <q-dialog v-model="footerDialogState">
    <q-card>
      <q-card-section class="flex row justify-between q-ml-md">
        <div class="text-h6">Formulaire de contact :</div>
        <div class="justify-end">
          <q-btn icon="close" flat round dense v-close-popup />
        </div>
      </q-card-section>

      <q-card-section>
        <div class="q-px-md" style="max-width: 600px">
          <q-form
            @submit="onSubmit"
            class="q-gutter-md flex row justify-center"
          >
            <q-input
              outlined
              class="col-12"
              v-model="nickname"
              label="Nom"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Renseignez votre nom',
              ]"
            />
            <q-input
              outlined
              class="col-12"
              v-model="email"
              label="Email"
              lazy-rules
              :rules="[
                (val) => val.length > 0 || 'Renseignez votre email',
                (val) =>
                  (val && emailRegex.test(val)) ||
                  'Renseignez une adresse valide',
              ]"
            />

            <q-input
              outlined
              class="col-12"
              style="width: 500px"
              type="textarea"
              v-model="message"
              label="Votre message"
              lazy-rules
              required
              :rules="[
                (val) => (val && val.length > 0) || 'Écrivez votre message',
              ]"
            />

            <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->

            <div style="text-align: right">
              <q-btn label="Envoyer" type="submit" color="primary" />
              <!-- <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              /> -->
            </div>
          </q-form>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script>
export default {
  data() {
    return {
      emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      footerDialogState: false,
      nickname: "",
      message: "",
      email: "",
    };
  },
  props: {
    showDialog: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    onSubmit() {},
    onReset() {
      this.nickname = "";
      this.message = "";
    },
  },
};
</script>
<style></style>
