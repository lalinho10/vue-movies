<template>
    <div class="d-flex mt-4 pa-4 overflow-y-auto">
        <tarjeta-imagen
            v-for="(fondo, i) in fondos"
            :imagen="poster(fondo.file_path)"
            :tamano="300"
            :key="i">
        </tarjeta-imagen>
    </div>
</template>

<script>
import TarjetaImagen from '../components/TarjetaImagen.vue';

export default {
    components: {
        'tarjeta-imagen': TarjetaImagen,
    },
    data() {
        return {
           fondos: []
        }
    },
    mounted() {
        this.fondos = this.$store.state.moduloPeliculas.fondos;
    }
}
</script>