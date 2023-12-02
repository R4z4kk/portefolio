<template>
  <div class="q-pa-md no-wrap">
    <q-carousel
      v-model="slide"
      swipeable
      animated
      padding
      arrows
      autoplay
      height="100px"
      class="bg-dark text-white rounded-borders"
    >
      <q-carousel-slide :name="1" class="row no-wrap flex-center">
        <q-icon name="trending_up" size="35px" />
        <div class="q-ml-md text-center text-h6">
          Découvrez mon bilan de compétences :
          <a href="#/skills">Page de compétences</a>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="row no-wrap flex-center">
        <q-icon name="emoji_events" size="35px" />
        <div class="q-ml-md text-center text-h6">
          Découvrez mes réalisations : <a href="#/projects">Page des projets</a>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      autoplay: true,
      slide: 1,
    };
  },
};
</script>
<style></style>
