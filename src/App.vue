<template>
  <v-app>
    <joke-header></joke-header>
    <v-container class="mt-16">
      <router-view></router-view>
    </v-container>
  </v-app>
</template>
<script>
import Header from "./components/Header.vue";

export default {
  components: {
    JokeHeader: Header,
  },
};
</script>

<style lang="scss">
.v-application a {
  color: white !important;
  text-decoration: none;
}
</style>
