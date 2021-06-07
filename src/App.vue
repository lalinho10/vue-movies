<template>
  <v-app>
    <v-app-bar app>
      <v-tabs>
        <v-tab to="/">Inicio</v-tab>
        <v-tab to="/usuario">Mis listas</v-tab>
        <v-tab to="/contacto">Contáctanos</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main>
      <v-container>
        <cargando v-if="cargando" />
        <router-view v-else />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Cargando from './components/Cargando.vue'

export default {
  components: {
    'cargando': Cargando
  },
  data() {
    return {
      cargando: true,
    }
  },
  mounted() {
    const cartelera = this.$store.dispatch('obtenerCartelera')
    const populares = this.$store.dispatch('obtenerPopulares')
    const animadas = this.$store.dispatch('obtenerAnimadas')

    Promise.all([cartelera, populares, animadas])
      .then(() => this.cargando = false)
  }
}
</script>
