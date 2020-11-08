<template>
  <div>
    <h2 class="mt-10">Edit your joke here</h2>
    <v-form>
      <v-text-field v-model="joke" label="Edit your joke" required>
      </v-text-field>
      <v-btn class="mb-4" color="green" large outlined @click="EditJoke"
        >Update your joke</v-btn
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
    EditJoke() {
      let id = this.$route.params.id;
      axios
        .put(`http://localhost:8000/api/v1/${id}/`, { punchLine: this.joke })
        .then(() => {
          console.log(this.joke);
          this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          console.log(this.joke);
          console.log(err);
        });
    },
  },
  mounted() {
    let id = this.$route.params.id;
    // console.log(id);
    axios
      .get(`http://localhost:8000/api/v1/${id}`)
      .then((res) => {
        // console.log(res.data);
        this.joke = res.data.punchLine;
      })
      .catch((err) => {
        if (err.response.status == 404) {
          console.log("404 Bitches");
        } else {
          console.log(err);
        }
      });
  },
};
</script>

<style>
</style>