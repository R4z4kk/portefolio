<template>
  <q-page class="flex row justify-center items-start q-mx-md">
    <IndexPageFirstCards />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import IndexPageFirstCards from "../components/IndexPageFirstCards.vue";
export default defineComponent({
  name: "IndexPage",
  components: {
    IndexPageFirstCards,
  },
});
</script>
