<template>
  <v-app style="background-color: rgb(170, 185, 186);">
    <v-container class="pa-2" fluid>
      <v-card color="rgb(170, 185, 186, 0.9)" flat dark>
        <v-img max-height="760px" :src="background.background1" contain>
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="10" md="3">
                <v-card color="rgb(170, 185, 186, 0.9)" class="elevation-12">
                  <v-card-title
                    class="deep-purple--text text--darken-4"
                  >PAŽADINKITE SAVYJE MEILĘ GAMTAI</v-card-title>
                  <v-card-text
                    class="justify-center deep-purple--text text--darken-4"
                  >SODYBA ĮSIKŪRUSI ŠALIA MIŠKO, ANT MITUVOS UPĖS KRANTO, TOLI NUO ŽMONIŲ IR TRIUKŠMO, APSUPTA NATŪRALIOS GAMTOS IR JOS GARSŲ. ATVYKUSIŲJŲ LAUKIA PASIPLAUKIOJIMAI BAIDARĖMIS IR VALTIMI, UGNIAKURAS, PRŪDAS IR UPĖ, TAIP PAT KLOJIMAS DIDELĖMS ŠVENTĖMS - VESTUVĖMS, GIMTADIENIAMS, GIMINIŲ SUSITIKIMAMS</v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-card>
    </v-container>
    <v-container class="pa-2" fluid>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center" style="background-color: rgb(170, 185, 186);">
            <v-card
              v-for="image in images"
              class="ma-3 pa-6"
              outlined
              tile
              style="background-color: rgb(170, 185, 186);"
            >
              <v-img :src="image.image"></v-img>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      background: {
        background1: require("../assets/photos/19_medium.jpg")
      },
      images: [
        { image: require("../assets/photos/45_medium.jpg") },
        { image: require("../assets/photos/21_medium.jpg") },
        { image: require("../assets/photos/43_medium.jpg") },
        { image: require("../assets/photos/47_medium.jpg") },
        { image: require("../assets/photos/2_medium.jpg") },
        { image: require("../assets/photos/8_medium.jpg") },
        { image: require("../assets/photos/25_medium.jpg") },
        { image: require("../assets/photos/35_medium.jpg") }
      ]
    };
  }
};
</script>