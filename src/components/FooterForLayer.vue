<template>
  <DialogForFooter v-model="footerDialog" :showDialog="footerDialog" />
  <q-footer elevated>
    <q-toolbar>
      <q-toolbar-title>
        <pre
          style="text-align: center"
        >Une question ? Un avis ? <u @click="footerDialog = !footerDialog">Contactez-moi</u></pre>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>
<script>
import DialogForFooter from "./DialogForFooter.vue";
export default {
  data() {
    return {
      footerDialog: false,
    };
  },
  components: {
    DialogForFooter,
  },
};
</script>
<style></style>
