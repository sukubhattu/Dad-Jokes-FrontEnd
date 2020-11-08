<template>
  <v-app>
    <joke-header></joke-header>
    <v-container class="mt-16">
      <create-joke></create-joke>
      <jokes-list-view></jokes-list-view>
    </v-container>
  </v-app>
</template>
<script>
import Header from "./components/Header.vue";
import CreateJoke from "./components/CreateJoke.vue";
import JokesListView from "./components/JokesListView.vue";
// import DetailView from "./components/DetailView.vue";
export default {
  components: {
    JokeHeader: Header,
    CreateJoke: CreateJoke,
    JokesListView: JokesListView,
    // JokeDetailView: DetailView,
  },
};
</script>

<style lang="scss">
</style>
