<template>

    <cargando v-if="cargando" />

    <div v-else class="d-flex flex-column">
        <div class="d-flex align-center justify-space-between mt-4">
            <span>
                Hola, {{usuario.username}}
            </span>
            <v-btn color="primary">Crear lista</v-btn>
        </div>
        <hr class="my-2">
        <div>
            <h1>Mis listas</h1>
            <v-list>
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
                            {{lista.description}}
                        </v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-btn icon>
                            <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </div>
    </div>

</template>

<script>
import Cargando from '../components/Cargando.vue'

export default {
    components: {
        'cargando': Cargando
    },
    data: function() {
        return {
            cargando: true,
            usuario: null,
            listas: [],
        }
    },
    async mounted() {
        const sessionId = this.$store.state.moduloAutenticacion.sessionId
        await this.$store.dispatch('obtenerCuenta', sessionId)
        this.usuario = this.$store.state.moduloUsuario.usuario
        const accountId = this.usuario.id
        await this.$store.dispatch('obtenerListas', { accountId, sessionId })
        this.listas = this.$store.state.moduloUsuario.listas
        this.cargando = false
    },
}
</script>