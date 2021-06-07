<template>
    <div>
        <h1>Mis listas</h1>

        <cargando v-if="cargando" />

        <v-alert v-else-if="listas.length === 0"
            dense
            outlined
            prominent
            class="mt-4"
            border="left"
            type="info">
            No has creado ninguna lista
        </v-alert>

        <v-list v-else>
            <v-list-item v-for="lista in listas" :key="lista.id">
                <v-list-item-avatar>
                    <v-icon color="primary" v-if="lista.list_type === 'movie'">
                        mdi-filmstrip
                    </v-icon>
                    <v-icon  color="primary" v-else>
                        mdi-television
                    </v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>
                        {{lista.name}}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        {{lista.description}} <i>({{lista.item_count}} elementos)</i>
                    </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                    <v-btn icon :to="`/usuario/lista/${lista.id}`">
                        <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
import Cargando from '../../components/Cargando.vue'

export default {
    components: {
        'cargando': Cargando
    },
    data: function() {
        return {
            cargando: true,
            listas: [],
        }
    },
    mounted() {
        const accountId = this.$store.state.moduloUsuario.usuario.id

        this.$store.dispatch('obtenerListas', accountId)
            .then(() => {
                this.listas = this.$store.state.moduloUsuario.listas
                this.cargando = false
            })
    },
}
</script>