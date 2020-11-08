<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title
      ><router-link :to="{ name: 'Home' }"> Jokes</router-link></v-toolbar-title
    >
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>