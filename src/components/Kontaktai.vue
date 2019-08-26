<template>
  <v-app style="background-color: rgb(170, 185, 186);">
    <v-content>
      <v-container class="pa-2" fluid>
        <v-img mx-auto :src="images.image1" max-height="760" contain>
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8" md="4">
                <v-card color="rgb(170, 185, 186, 0.9)" class="elevation-12">
                  <v-card-title class="justify-center deep-purple--text text--darken-4">SUSISIEKITE</v-card-title>
                  <v-card-title
                    class="body-1 justify-center deep-purple--text text--darken-4"
                  >Voverynė facebook</v-card-title>
                  <v-card-title
                    class="body-1 justify-center deep-purple--text text--darken-4"
                  >+37063737121</v-card-title>
                  <v-card-title
                    class="body-1 justify-center deep-purple--text text--darken-4"
                  >Voverynė, Bandzinų k., Jurbarko rajonas</v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      images: {
        image1: require("../assets/photos/26.jpg")
      }
    };
  }
};
</script>