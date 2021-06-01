<template>
  <div>
    <v-row v-if="!pelicula">
        <v-col>
            <v-progress-circular
                indeterminate
                color="primary"
                size="70"
                width="7">
            </v-progress-circular>
            <span>Cargando...</span>
        </v-col>
    </v-row>
    <v-row v-else>
        <v-col cols="12" md="4">
            <img :src="'http://image.tmdb.org/t/p/w300/' + pelicula.poster_path">
        </v-col>
        <v-col cols="12" md="8">
            <h1>
                <a :href="pelicula.homepage" target="_blank">
                    {{pelicula.title}}
                </a>
                <span class="anio">
                    ({{anio(pelicula.release_date)}})
                </span>
            </h1>
            <p>
                <span>{{generos(pelicula.genres)}}</span>
            </p>
            <p>
                <v-progress-circular
                    :rotate="-90"
                    :size="50"
                    :width="7"
                    :value="pelicula.vote_average * 10 || 0"
                    color="teal">
                    {{pelicula.vote_average * 10}}
                </v-progress-circular>
                <span class="pl-4">Calificación de los usuarios</span>
            </p>
            <p v-if="pelicula.tagline"><em>{{pelicula.tagline}}</em></p>
            <h2 v-if="pelicula.overview">Resumen</h2>
            <p v-if="pelicula.overview">{{pelicula.overview}}</p>
        </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            pelicula: null,
        }
    },
    methods: {
        anio(fecha) {
            return new Date(fecha).getFullYear();
        },
        duracion() {

        },
        generos(generos) {
            return generos.map((genero) => genero.name).join(', ');
        }
    },
    mounted() {
        this.$store.dispatch('obtenerPelicula', this.$route.params.id)
            .then(() => this.pelicula = this.$store.state.peliculaSeleccionada);
    }
}
</script>


<style scoped>
.anio {
    opacity: 0.4;
}
</style>