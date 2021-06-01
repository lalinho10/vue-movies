<template>
  <div>
    <h1>Contáctanos</h1>
    <v-divider class="my-2"></v-divider>
    <form>
      <v-row no-gutters>
        <v-col>
          <v-text-field
            dense
            label="Nombre"
            outlined
            v-model="contacto.nombre">
          </v-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12" md="6">
          <p>Edad: {{ contacto.edad }}</p>
          <v-slider
            class="px-4"
            color="primary"
            track-color="grey lighten-3"
            thumb-color="primary darken-4"
            thumb-label
            v-model="contacto.edad">
          </v-slider>
        </v-col>
        <v-col class="px-4" cols="12" md="6">
          <label>Género</label>
          <v-radio-group v-model="contacto.genero" row>
            <v-radio
              color="red"
              label="Femenino"
              value="Femenino"
            ></v-radio>
            <v-radio
              color="indigo"
              label="Masculino"
              value="Masculino"
            ></v-radio>
            <v-radio
              color="green"
              label="Otro"
              value="Otro"
            ></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            dense
            label="Email"
            outlined
            v-model="contacto.email">
          </v-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <v-text-field
            dense
            label="Tema"
            outlined
            v-model="contacto.tema">
          </v-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <v-textarea
            dense
            solo
            label="Mensaje"
            v-model="contacto.mensaje">
          </v-textarea>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <v-switch
            class="ma-0 pa-0"
            label="Aceptar términos y condiciones"
            v-model="contacto.terminos"
          ></v-switch>
        </v-col>
      </v-row>
      <v-row no-gutters justify="end">
        <v-col>
          <v-btn color="primary">Enviar</v-btn>
        </v-col>
      </v-row>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      contacto: {
        nombre: '',
        edad: null,
        genero: '',
        email: '',
        tema: '',
        mensaje: '',
        terminos: false,
      }
    }
  }
}
</script>