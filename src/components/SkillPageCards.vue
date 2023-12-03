<template>
  <div class="flex row justify-around">
    <q-card
      v-for="card in skillPageCardsContent"
      :key="card.title"
      dark
      class="bg-dark col-5 cardborder"
    >
      <q-card-section>
        <div class="text-h6">{{ card.title }}</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        <ul v-for="content in card.content" :key="content">
          <li class="flex items-center justify-between">
            {{ content.name }}
            <span>
              <q-rating
                v-model="content.confidence"
                max="5"
                size="2em"
                color="yellow"
                icon="star_border"
                icon-selected="star"
                icon-half="star_half"
                readonly
                no-dimming
            /></span>
          </li>
        </ul>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import skillPageCardsContent from "../assets/skillPageCardsContent";
export default {
  data() {
    return {
      skillPageCardsContent,
    };
  },
};
</script>
<style>
.cardborder {
  border: 1px solid white;
}
</style>
