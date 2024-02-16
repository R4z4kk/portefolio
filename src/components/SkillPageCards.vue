<template>
  <div class="flex justify-around">
    <q-card
      v-for="card in skillPageCardsContent"
      :key="card.title"
      dark
      class="bg-dark q-ma-sm cardborder"
    >
      <q-card-section>
        <div class="text-h6 text-center">{{ card.title }}</div>
      </q-card-section>

      <q-card-section>
        <ul v-for="content in card.content" :key="content" class="ulclass">
          <li>
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
.ulclass {
  padding: inherit;
  text-align-last: center;
  list-style-type: none;
}
</style>
