<template>
    <v-card class="mr-4" max-width="150">
        <v-img :src="imagen" max-width="150">
        </v-img>
        <v-card-title class="text-wrap">
            {{titulo}}
        </v-card-title>
        <v-card-text class="text-wrap">
            {{detalle}}
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: [
        'imagen',
        'titulo',
        'detalle',
    ],
}
</script>

<style scoped>
.v-card__title, .v-card__text {
  word-break: normal !important
}
</style>