<template>

    <cargando v-if="!usuario" />

    <div v-else class="d-flex flex-column">
        <div class="d-flex align-center justify-space-between mt-4">
            <span>
                Hola, {{usuario.username}}
            </span>
            <v-btn color="primary" to="/usuario/crearlista">Crear lista</v-btn>
        </div>
        <hr class="my-4">
        <router-view></router-view>
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
            usuario: null,
        }
    },
    mounted() {
        this.$store.dispatch('obtenerCuenta')
            .then(() => this.usuario = this.$store.state.moduloUsuario.usuario)
    },
}
</script>