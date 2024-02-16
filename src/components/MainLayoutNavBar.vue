<template>
  <q-header elevated>
    <q-toolbar class="bg-dark navbarBorder">
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="sendStateChange"
      />
      <q-toolbar-title class="flex flex-center">
        {{ this.$route.name }}
      </q-toolbar-title>
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
<style>
.navbarBorder {
  border-bottom: 2px white solid;
}
</style>
