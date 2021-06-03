<template>
  <div>
    <h1>Mi lista</h1>
    <v-autocomplete
      v-model="modelo"
      :items="resultados"
      :loading="loading"
      :search-input.sync="buscar"
      hide-no-data
      hide-selected
      item-text="title"
      item-value="id"
      label="Busca una película..."
      placeholder="Captura el nombre la película que deseas agregar"
      prepend-icon="mdi-database-search"
      return-object>

      <template v-slot:item="data">
        <v-list-item-avatar>
          <img :src="'http://image.tmdb.org/t/p/w200' + data.item.poster_path">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            {{data.item.title}}
          </v-list-item-title>
        </v-list-item-content>
      </template>

      <template v-slot:selection="data">
        <v-list-item-content>
          <v-list-item-title>
            {{data.item.title}}
          </v-list-item-title>
        </v-list-item-content>
      </template>

    </v-autocomplete>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      buscar: null,
      loading: false,
      modelo: null,
      resultados: [],
    }
  },
  watch: {
    buscar(textoBusqueda) {
      axios.get(`/search/movie?api_key=96d4174471b508fca5ba64fda73b00e3&include_adult=false&page=1&&language=es-MX&query=${textoBusqueda}`)
        .then((response) => {
          this.resultados = response.data.results;
        })
    }
  }
}
</script>