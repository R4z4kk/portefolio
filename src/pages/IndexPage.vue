<template>
  <q-page style="min-height: 0px" class="flex row justify-evenly items-start">
    <div class="col-12">
      <IndexPageSlogan />
    </div>
    <IndexPageFirstCards />
    <div class="col-12">
      <IndexPageCarousel />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import IndexPageFirstCards from "../components/IndexPageFirstCards.vue";
import IndexPageSlogan from "src/components/IndexPageSlogan.vue";
import IndexPageCarousel from "src/components/IndexPageCarousel.vue";
export default defineComponent({
  name: "IndexPage",
  components: {
    IndexPageFirstCards,
    IndexPageSlogan,
    IndexPageCarousel,
  },
});
</script>
