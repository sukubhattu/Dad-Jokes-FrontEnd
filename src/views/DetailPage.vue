<template>
  <div>
    <h1>{{ joke.punchLine }}</h1>
    <div class="mt-4">
      <v-btn
        class="mr-4"
        color="red"
        elevation="2"
        dark
        small
        @click="deleteJoke"
        >Delete</v-btn
      >
      <router-link :to="{ name: 'JokeEdit' }">
        <v-btn color="blue" elevation="2" dark small>Edit</v-btn>
      </router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => {
    return { joke: "" };
  },
  methods: {
    deleteJoke() {
      let id = this.$route.params.id;
      // console.log(id);
      axios
        .delete(`http://localhost:8000/api/v1/${id}`)
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    let id = this.$route.params.id;
    axios
      .get(`http://localhost:8000/api/v1/${id}`)
      .then((res) => {
        this.joke = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
</style>