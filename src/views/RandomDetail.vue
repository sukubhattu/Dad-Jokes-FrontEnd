<template>
  <div><h1>I am random page</h1></div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    axios
      .get("http://localhost:8000/api/v1/random")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (err.response.status == 404) {
          console.log("404 bitches");
        } else {
          console.log(err);
        }
      });
  },
};
</script>

<style>
</style>