<template>
  <div>
    <div v-if="listJokes.length">
      <ul v-for="joke in listJokes" :key="joke.index">
        {{
          joke.punchLine
        }}
      </ul>
    </div>
    <div v-else><p>No jokes to show</p></div>
  </div>
</template>

<script>
// Import helpers from vuex
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["listJokes"]),
  },
  watch: {
    ...mapGetters(["listJokes"]),
  },
  methods: {
    ...mapActions(["getJokes"]),
  },
  mounted() {
    this.getJokes();
  },
};
</script>

<style lang="scss" scoped>
</style>>
