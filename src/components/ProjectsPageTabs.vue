<template>
  <div>
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="bg-dark-2 text-white"
        active-color="green"
        indicator-color="green"
        align="justify"
      >
        <q-tab name="front" label="Front" />
        <q-tab name="back" label="Back" />
        <q-tab name="devops" label="DevOps" />
      </q-tabs>

      <q-tab-panels
        v-model="tab"
        swipeable
        infinite
        animated
        class="bg-dark-2 text-white"
      >
        <q-tab-panel name="front">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="back">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="devops">
          <div class="text-h6">DevOps</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: "front",
    };
  },
};
</script>
<style></style>
