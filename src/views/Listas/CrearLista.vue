<template>
  <div>
    <h1>Crear lista</h1>
    <v-row>
        <v-col cols="12">
            <v-btn fab top left small to="/usuario">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
        </v-col>
    </v-row>

    <v-form class="mt-4" ref="formLista" v-if="!lista.id">
      <v-row no-gutters>
          <v-col>
            <v-text-field
              dense
              label="Nombre"
              outlined
              :rules="[reglas.requerido]"
              v-model="lista.nombre">
            </v-text-field>
          </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <v-textarea
            dense
            solo
            label="Descripción"
            v-model="lista.descripcion">
          </v-textarea>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="d-flex justify-end">
          <v-btn color="primary" @click="crearLista">Crear</v-btn>
        </v-col>
      </v-row>
    </v-form>

    <div class="mt-4" v-else>
      Agrega elementos a {{lista.nombre}}
      <v-row no-gutters>
        <v-col>
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
            return-object
            @change="agregarElemento()">

            <template v-slot:item="data">
              <v-list-item-avatar>
                <img :src="poster(data.item.poster_path)">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{data.item.title}}
                </v-list-item-title>
              </v-list-item-content>
            </template>
          </v-autocomplete>
        </v-col>
      </v-row>
      <v-row v-if="elementosLista.length > 0" no-gutters>
        <v-col cols="12">
          Elementos en la lista:
        </v-col>
        <v-col cols="12">
          <v-list >
            <v-list-item v-for="elemento in elementosLista" :key="elemento.id">
              <v-list-item-avatar>
                <img :src="poster(elemento.poster_path)">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{elemento.title}}
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon @click="removerElemento(elemento.id)">
                  <v-icon color="red lighten-2">mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      lista: {
        id: null,
        nombre: null,
        descripcion: null,
      },
      reglas: {
        requerido: value => !!value || 'Campo requerido',
      },
      buscar: null,
      loading: false,
      modelo: null,
      resultados: [],
      elementosLista: [],
    }
  },
  methods: {
    crearLista() {
      if (this.$refs.formLista.validate()) {
        this.$store.dispatch('crearLista', {
          name: this.lista.nombre,
          description: this.lista.descripcion,
        })
        .then(() => {
          this.lista.id = this.$store.state.moduloUsuario.idListaCreada;
        })
      }
    },
    agregarElemento() {
      axios.post(`/list/${this.lista.id}/add_item?api_key=${process.env.VUE_APP_TMDB_API_KEY}&session_id=${this.$store.state.moduloAutenticacion.sessionId}`, {
        media_id: this.modelo.id,
      })
      .then(() => {
        this.elementosLista.push(this.modelo)
        this.modelo = null
      })
    },
    removerElemento(id) {
      axios.post(`/list/${this.lista.id}/remove_item?api_key=${process.env.VUE_APP_TMDB_API_KEY}&session_id=${this.$store.state.moduloAutenticacion.sessionId}`, {
        media_id: id,
      })
      .then(() => this.elementosLista = this.elementosLista.filter((elemento) => elemento.id !== id))
    },
  },
  watch: {
    buscar(textoBusqueda) {
      axios.get(`/search/movie?api_key=${process.env.VUE_APP_TMDB_API_KEY}&include_adult=false&page=1&&language=es-MX&query=${textoBusqueda}`)
        .then((response) => {
          this.resultados = response.data.results;
        })
    }
  },
}
</script>