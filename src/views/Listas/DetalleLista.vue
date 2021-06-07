<template>
    <cargando v-if="!lista && !error"></cargando>

    <v-row v-else>
        <v-col cols="12">
            <v-btn fab top left small to="/usuario">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
        </v-col>
        <v-col class="pb-0" cols="12">
            <h1>{{lista.name}}</h1>
            <p>{{lista.description}}</p>
        </v-col>
        <v-col class="pt-0" cols="12">
            <v-alert v-if="!lista.items && error"
                dense
                outlined
                prominent
                class="mt-4"
                border="left"
                type="error">
                Lista no encontrada
            </v-alert>

            <v-alert v-else-if="lista.items.length === 0"
                dense
                outlined
                prominent
                class="mt-4"
                border="left"
                type="info">
                La lista no contiene elementos
            </v-alert>

            <v-list v-else>
                <v-list-item v-for="item in lista.items" :key="item.id">
                    <v-list-item-avatar>
                        <img :src="poster(item.poster_path)">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title v-if="item.media_type === 'movie'">
                            {{item.title}}
                        </v-list-item-title>
                        <v-list-item-title v-else>
                            {{item.name}}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            {{item.overview}}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-col>
    </v-row>
</template>

<script>
import Cargando from '../../components/Cargando.vue'

export default {
    components: {
        'cargando': Cargando
    },
    data() {
        return {
            lista: null,
            error: false,
        }
    },
    mounted() {
        this.$store.dispatch('obtenerListaSeleccionada', this.$route.params.id)
            .then(() => {
                this.lista = this.$store.state.moduloUsuario.listaSeleccionada
            })
            .catch(() => {
                this.lista = {}
                this.error = true
            })
    },
}
</script>