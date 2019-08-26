<template>
  <v-app style="background-color: rgb(170, 185, 186);">
    <v-content>
      <v-container class="pa-2" fluid>
        <v-img mx-auto :src="images.image1" max-height="760" contain>
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8" md="3">
                <v-card color="rgb(170, 185, 186, 0.9)" class="elevation-12">
                  <v-card-title class="justify-center deep-purple--text text--darken-4">VIETA</v-card-title>
                  <v-card-text
                    class="deep-purple--text text--darken-4 accent-4"
                  >18KM Į ŠIAURĘ NUO JURBARKO RASITE VOVERYNĖS SODYBĄ. SODYBA STOVI LAUKINĖS GAMTOS, MIŠKŲ IR PIEVŲ APSUPTYJE. VIETA PUIKIAI TINKA PASIILGUSIEMS VISIŠKOS RAMYBĖS, GAMTOS GARSŲ BEI LIETUVIŠKO KUKLUMO. NUSITEIKITE SUSIPAŽINTI SU NETIKĖTAIS MIŠKO GYVENTOJAIS - STIRNOMIS, ZUIKIAIS, PELĖDOMIS AR NET ELNIAIS, KURIE ČIA MĖGSTA UŽKLYSTI.</v-card-text>
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
        image1: require("../assets/photos/32_medium.jpg")
      }
    };
  }
};
</script>