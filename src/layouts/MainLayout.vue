<template>
  <q-layout view="lHh Lpr lFf">
    <NavBar @state="(state) => (leftDrawerOpen = state)" />
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <!-- <q-item-label header> Menu </q-item-label> -->

        <MenuLinks
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import MenuLinks from "components/MenuLinks.vue";
import linksList from "src/assets/navigationLinks";
import NavBar from "src/components/NavBar.vue";
export default defineComponent({
  name: "MainLayout",

  components: {
    MenuLinks,
    NavBar,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
