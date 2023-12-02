<template lang="fr">
  <q-card class="cards" v-for="card in homeCardsContent" :key="card.title" >
    <q-card-section >
      <div class="text-h6">{{ card.title }}</div>
      <q-img
      v-if="card.image"
      width="200px"
      class="rounded-borders"
      src="../assets/IMG_20231116_215255.jpg"
    />
      <div
        v-for="object in card.content"
        :key="object.subtitle"
        class="text-subtitle2"
      >

          <q-list>
            <q-item>
              <q-item-section>
                <div v-if="!object.diploma">{{object.substitle}}</div>
                <div v-if="object.diploma" class="text-subtitle2">{{object.substitle}} - {{object.diploma}}
                  <span v-if="object.details">
                    <q-icon name="help" size="25px">

                      <q-popup-proxy>
                        <q-banner>
                          {{object.details}}
                        </q-banner>
                      </q-popup-proxy>

                  </q-icon>
                  </span>
                </div>
                <q-item-label v-if="object.employer">{{object.years}} - {{object.employer}}</q-item-label>
                <q-item-label caption lines="2">{{object.missions}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        <div v-if="object.employer" class="text-subtitle2"></div>
      </div>

    </q-card-section>
  </q-card>
</template>
<script>
import homeCardsContent from "src/assets/homeCardsContent";
import { defineComponent } from "vue";
export default defineComponent({
  name: "IndexPageFirstCards",
  setup() {
    return {
      homeCardsContent,
    };
  },
});
</script>
<style scoped>
.cards {
  border: 1px solid white;
}
</style>
