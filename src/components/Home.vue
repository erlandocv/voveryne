<template>
  <v-app style="background-color: rgb(170, 185, 186);">
    <v-container class="pa-2" fluid>
      <v-row>
        <v-img :src="images.logo1" contain max-height="200"></v-img>
      </v-row>
      <v-row>
        <v-img :src="images.image1" max-height="560"></v-img>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      images: {
        image1: require("../assets/photos/22.jpg"),
        logo1: require("../assets/logo/logo@1.png"),
        logo2: require("../assets/logo/logo@2x.png"),
        logo05: require("../assets/logo/logo@0,5x.png")
      }
    };
  }
};
</script>