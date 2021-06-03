<template>
    <div class="d-flex mt-4 pa-4 overflow-y-auto">
        <tarjeta-imagen
            v-for="(aPoster, i) in posters"
            :imagen="poster(aPoster.file_path)"
            :tamano="200"
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
           posters: []
        }
    },
    mounted() {
        this.posters = this.$store.state.moduloPeliculas.posters;
    }
}
</script>