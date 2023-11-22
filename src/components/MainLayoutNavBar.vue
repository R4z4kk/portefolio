<template lang="fr">
  <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="sendStateChange"
        />
        <q-toolbar-title class="flex flex-center"> active page </q-toolbar-title>
      </q-toolbar>
    </q-header>
</template>
<script>
export default {
  props: {
    drawerState: Boolean,
  },
  emits: ["changeDrawerState"],

  methods: {
    sendStateChange() {
      this.$emit("changeDrawerState", !this.drawerState);
    },
  },
};
</script>
<style lang="fr"></style>
