<template>
    <div class="d-flex mt-4 pa-4 overflow-y-auto">
        <tarjeta-persona
            v-for="(persona, i) in personas"
            :imagen="poster(persona.profile_path)"
            :titulo="persona.name"
            :detalle="persona.department"
            :key="i">
        </tarjeta-persona>
    </div>
</template>

<script>
import TarjetaPersona from '../components/TarjetaPersona.vue';

export default {
    components: {
        'tarjeta-persona': TarjetaPersona,
    },
    data() {
        return {
           personas: []
        }
    },
    mounted() {
        this.personas = this.$store.state.moduloPeliculas.personal;
    }
}
</script>