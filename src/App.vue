<template>
  <v-app>
    <v-app-bar app>
      <v-tabs>
        <v-tab to="/">Inicio</v-tab>
        <v-tab to="/lista">Mi lista</v-tab>
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
export default {
  mounted() {
    this.$store.dispatch('obtenerCartelera')
    this.$store.dispatch('obtenerPopulares')
    this.$store.dispatch('obtenerAnimadas')
  }
}
</script>
