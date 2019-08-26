<template>
  <v-app style="background-color: rgb(170, 185, 186);">
    <v-container class="pa-2" fluid>
      <v-card color="rgb(170, 185, 186, 0.9)" flat dark>
        <v-img max-height="560px" :src="images.image1" contain>
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="3" md="3" lg="2">
                <v-card color="rgb(170, 185, 186, 0.9)" class="elevation-12">
                  <v-card-title class="justify-center deep-purple--text text--darken-4">VEIKLA</v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-card>
      <v-row v-for="(card) in cards">
        <v-col>
          <v-hover v-slot:default="{ hover}">
            <v-card
              height="100%"
              :class="card.class"
              :color="card.color"
              :elevation="hover ? 12 : 2"
            >
              <v-card-title :class="card.class" class="headline mb-2" v-text="card.title"></v-card-title>
              <v-divider></v-divider>
              <v-card-text :class="card.class" v-text="card.body"></v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      images: {
        image1: require("../assets/photos/7_medium.jpg")
      },
      cards: [
        {
          title: "VALTYS IR BAIDARĖS",
          body:
            "Vandens ir aktyvesnio poilsio mėgėjams siūlome irklinę arba motorinę valtį ir dvivietes baidares. Grožėkitės vaizdingais Mituvos upės vingiais Jums patogiu būdu.",

          color: "rgb(170, 185, 186, 0.9)",
          class: "deep-purple--text text--darken-4"
        },
        {
          title: "ŽVEJYBA",
          body:
            "Mituva bei privatus tvenkinys turėtų ypač patikti žvejams ir jiems prijaučiantiems. Susižvejokite vakarienę sau ir savo šeimai čia pat sodyboje.",

          color: "rgb(170, 185, 186, 0.9)",
          class: "deep-purple--text text--darken-4"
        }
      ]
    };
  }
};
</script>