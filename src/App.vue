<template>
  <v-app>
    <v-app-bar app>
      <v-tabs>
        <v-tab to="/">Inicio</v-tab>
        <v-tab to="/contacto">Contáctanos</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    axios.get('movie/now_playing?api_key=96d4174471b508fca5ba64fda73b00e3&language=es-MX&page=1')
      .then((response) => console.log(response))
  }
}
</script>
