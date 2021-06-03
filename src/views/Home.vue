<template>
  <v-row>
    <v-col class="px-5" md="4" sm="12">
      <h1 class="text-center">
        Cartelera
      </h1>
      <!--span v-for="(pelicula, i) in peliculasCartelera"
        :key="i">
        {{poster(pelicula.poster_path)}}
      </span-->
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(pelicula, i) in peliculasCartelera"
          :key="i"
          :src="poster(pelicula.poster_path)"
          @click="detallePelicula(pelicula.id)">
        </v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col class="px-5" cols="12" md="4">
      <h1 class="text-center">
        Populares
      </h1>
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(pelicula, i) in peliculasPopulares"
          :key="i"
          :src="poster(pelicula.poster_path)"
          @click="detallePelicula(pelicula.id)">
        </v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col class="px-5" cols="12" md="4">
      <h1 class="text-center">
        Animadas
      </h1>
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(pelicula, i) in peliculasAnimadas"
          :key="i"
          :src="poster(pelicula.poster_path)"
          @click="detallePelicula(pelicula.id)">
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: function() {
    return {
      peliculasCartelera: this.$store.state.moduloPeliculas.peliculasCartelera,
      peliculasPopulares: this.$store.state.moduloPeliculas.peliculasPopulares,
      peliculasAnimadas: this.$store.state.moduloPeliculas.peliculasAnimadas,
    }
  },
  methods: {
    detallePelicula(idPelicula) {
      this.$router.push(`/detalle/${idPelicula}`);
    },
  },
}
</script>
