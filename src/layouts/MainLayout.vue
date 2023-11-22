<template>
  <q-layout view="lHh Lpr lFf">
    <MainLayoutNavBar
      :drawerState="leftDrawerOpen"
      @changeDrawerState="(state) => (leftDrawerOpen = state)"
    />
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <!-- <q-item-label header> Menu </q-item-label> -->

        <MainLayoutMenuLinks
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          @click="leftDrawerOpen = false"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view @click="leftDrawerOpen = false" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import MainLayoutMenuLinks from "components/MainLayoutMenuLinks.vue";
import linksList from "src/assets/navigationLinks";
import MainLayoutNavBar from "src/components/MainLayoutNavBar.vue";

export default defineComponent({
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
  name: "MainLayout",

  components: {
    MainLayoutMenuLinks,
    MainLayoutNavBar,
  },
});
</script>
