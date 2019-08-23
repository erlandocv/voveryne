<template>
  <v-app>
    <div id="app">
      <v-content class="fill-height" fluid>
        <router-view />
      </v-content>
      <v-bottom-navigation horizontal app color="deep-purple accent-4" :value="activeBtn">
        <v-btn value="Kontaktai" to="/Kontaktai">
          <span>Kontaktai</span>
          <v-icon>contacts</v-icon>
        </v-btn>

        <v-btn value="Sodyba" to="/sodyba">
          <span>Sodyba</span>
          <v-icon>spa</v-icon>
        </v-btn>

        <v-btn value="Veikla" to="/Veikla">
          <span>Veikla</span>
          <v-icon>all_inclusive</v-icon>
        </v-btn>

        <v-btn value="Vieta" to="/Vieta">
          <span>Vieta</span>
          <v-icon>place</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: 1
    };
  }
};
</script>