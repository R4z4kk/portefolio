<template lang="fr">
  <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="emit('state',!drawerState)"
        />
        <q-toolbar-title class="flex flex-center"> active page </q-toolbar-title>
      </q-toolbar>
    </q-header>
</template>
<script setup>
import { ref } from "vue";
const emit = defineEmits(["state"]);
// const drawerState = ref(false);
</script>
<style lang="fr"></style>
