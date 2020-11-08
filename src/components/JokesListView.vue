<template>
  <div>
    <div v-if="jokes && jokes.length">
      <v-alert
        v-for="joke in jokes"
        :key="joke.id"
        class="px-16 py-8 mb-4"
        border="left"
        color="indigo"
        dark
      >
        <p class="mb-0">{{ joke.punchLine }}</p>
      </v-alert>
    </div>
    <div v-else>
      <v-alert border="left" color="red" dark>
        <p class="mb-0">Sorry No Jokes in DB</p>
      </v-alert>
    </div>
  </div>
</template>

<script>
// Import axios
import axios from "axios";
export default {
  data: () => {
    return {
      jokes: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:8000/api/v1/")
      .then((res) => {
        console.log(res.data);
        this.jokes = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
</style>>
