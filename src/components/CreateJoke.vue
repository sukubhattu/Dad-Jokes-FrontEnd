<template>
  <div>
    <v-form>
      <v-text-field v-model="joke" label="Enter your joke here" required>
      </v-text-field>
      <v-btn class="mb-4" color="green" large outlined @click="createJoke"
        >Create a new Joke</v-btn
      >
    </v-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => {
    return {
      joke: "",
    };
  },
  methods: {
    createJoke() {
      axios
        .post("http://localhost:8000/api/v1/create/", { punchLine: this.joke })
        .then(() => {
          this.joke = "";
          console.log("success");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    captureJoke() {
      console.log(`${this.joke}`);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>