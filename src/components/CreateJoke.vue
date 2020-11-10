<template>
  <div>
    <v-form
      @submit.prevent="
        addJoke({
          punchLine: joke,
          clearJoke: function () {
            joke = '';
          },
        })
      "
    >
      <v-text-field v-model="joke" label="Enter your joke here" required>
      </v-text-field>
      <input type="submit" value="create new joke" />
    </v-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => {
    return {
      joke: "",
    };
  },
  methods: {
    ...mapActions(["addJoke"]),
  },
};
</script>

<style lang="scss" scoped>
</style>