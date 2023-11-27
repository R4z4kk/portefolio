<template>
  <q-page style="min-height: 0px" class="flex row justify-evenly items-start">
    <IndexPageSlogan />
    <IndexPageFirstCards />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import IndexPageFirstCards from "../components/IndexPageFirstCards.vue";
import IndexPageSlogan from "src/components/IndexPageSlogan.vue";
export default defineComponent({
  name: "IndexPage",
  components: {
    IndexPageFirstCards,
    IndexPageSlogan,
  },
});
</script>
