<template>
  <div>
    <create-joke></create-joke>
    <jokes-list-view></jokes-list-view>
  </div>
</template>

<script>
// Import create component and list component
import CreateJoke from "../components/CreateJoke.vue";
import JokesListView from "../components/JokesListView.vue";

export default {
  components: {
    CreateJoke,
    JokesListView,
  },
};
</script>

<style lang="scss" scoped>
</style>