<template>
  <div class="mt-5">
    <cargando v-if="!pelicula"></cargando>
    <template v-else>
        <v-row>
            <v-col cols="12">
                <v-btn fab top left small :to="{name: 'Home'}">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
            </v-col>
            <v-col cols="12" md="4">
                <img class="rounded-lg" :src="poster(pelicula.poster_path, 300)">
            </v-col>
            <v-col cols="12" md="8">
                <h1>
                    <a class="text-decoration-none"
                        target="_blank"
                        :href="pelicula.homepage">
                        {{pelicula.title}}
                    </a>
                    <span class="text--disabled">
                        ({{anio(pelicula.release_date)}})
                    </span>
                </h1>
                <p>
                    <span>{{generos(pelicula.genres)}}</span>
                    <span class="mx-3">-</span>
                    <span>{{duracion(pelicula.runtime)}}</span>
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
        <v-tabs v-if="mostrarDetalle" class="mt-4">
            <v-tab :to="`/detalle/${idPelicula}`">Elenco</v-tab>
            <v-tab :to="`/detalle/${idPelicula}/personal`">Personal</v-tab>
            <v-tab :to="`/detalle/${idPelicula}/posters`">Pósters</v-tab>
            <v-tab :to="`/detalle/${idPelicula}/fondos`">Imágenes de fondo</v-tab>
        </v-tabs>
        <router-view></router-view>
    </template>
  </div>

</template>

<script>
import Cargando from '../components/Cargando.vue'

export default {
    components: {
        'cargando': Cargando,
    },
    data: function() {
        return {
            pelicula: null,
            idPelicula: null,
            mostrarDetalle: false,
        }
    },
    methods: {
        anio(fecha) {
            return new Date(fecha).getFullYear();
        },
        duracion(tiempoMin) {
            const horas = Math.floor(tiempoMin / 60);
            const minutos = tiempoMin % 60;
            return `${horas}h ${minutos}m`
        },
        generos(generos) {
            return generos.map((genero) => genero.name).join(', ');
        },
        /*inicio() {
            this.$router.push({ name: 'Home' });
        }*/
    },
    mounted() {
        this.idPelicula = this.$route.params.id;

        this.$store.dispatch('obtenerPelicula', this.idPelicula)
            .then(() => this.pelicula = this.$store.state.moduloPeliculas.peliculaSeleccionada);

        const creditos = this.$store.dispatch('obtenerCreditos', this.idPelicula);
        const imagenes = this.$store.dispatch('obtenerImagenes', this.idPelicula);

        Promise.all([creditos, imagenes]).then(() => {
            this.mostrarDetalle = true;
        });
    }
}
</script>