<template>
    <div>
        <cargando></cargando>
    </div>
</template>

<script>
import Cargando from '../components/Cargando';

export default {
    components: {
        'cargando': Cargando,
    },
    mounted() {
        this.$store.dispatch('obtenerSessionID')
            .then(() => this.$router.push('/usuario'))
            .catch(() => this.$router.push('/'))
    }
}
</script>