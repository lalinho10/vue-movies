<template>
    <v-img class="mr-4" :src="imagen" :max-width="tamano">
    </v-img>
</template>

<script>
export default {
    props: [
        'imagen',
        'tamano',
    ],
}
</script>