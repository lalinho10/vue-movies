<template>
  <div>
    <h1>Contáctanos</h1>
    <v-divider class="my-2"></v-divider>
    <v-form ref="formContacto">
      <v-row no-gutters>
        <v-col>
          <v-text-field
            dense
            label="Nombre"
            outlined
            :rules="[reglas.requerido]"
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
            :rules="[reglas.mayorEdad]"
            v-model="contacto.edad">
          </v-slider>
        </v-col>
        <v-col class="px-4" cols="12" md="6">
          <label>Género</label>
          <v-radio-group
            :rules="[reglas.requerido]"
            v-model="contacto.genero"
            row>
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
            :rules="[reglas.requerido, reglas.formatoEmail]"
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
            :rules="[reglas.requerido]"
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
            :rules="[reglas.requerido]"
            v-model="contacto.mensaje">
          </v-textarea>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <v-switch
            class="ma-0 pa-0"
            label="Aceptar términos y condiciones"
            :rules="[reglas.terminos]"
            v-model="contacto.terminos"
          ></v-switch>
        </v-col>
      </v-row>
      <v-row no-gutters justify="end">
        <v-col>
          <v-btn color="primary" @click="guardar">Enviar</v-btn>
        </v-col>
      </v-row>
    </v-form>
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
      },
      reglas: {
        requerido: value => !!value || 'Campo requerido',
        mayorEdad: value => value >= 18 || 'Debes ser mayor de 18 años',
        formatoEmail: v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'email inválido',
        terminos: value => !!value || 'Debes aceptar los términos y condiciones',
      },
    }
  },
  methods: {
    guardar() {
      if (this.$refs.formContacto.validate()) {
        console.log(this.contacto)
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    if (!this.$refs.formContacto.validate()) {
      if (confirm('Hay campos pendientes de capturar en tu formulario. ¿Estás seguro que deseas continuar?')) {
        next()
      } else {
        next(false)
      }
    } else {
      next()
    }
  }
}
</script>