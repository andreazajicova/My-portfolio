<template>
  <v-dialog width="500">

      <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on">
              Add a new photo
          </v-btn>
      </template>

      <v-card>
        <v-form ref="form">
          <v-card-title class="headline light-green lighten-3">
             ⭐️
          </v-card-title>
          <v-card-text>
              <v-file-input
                :rules="rules"
                accept="image/png, image/jpeg"
                placeholder="Upload a photo"
                prepend-icon="add_a_photo"
                v-model="photo"
              ></v-file-input>
          </v-card-text>
          
          <v-menu transition="scale-transition" offset-y min-width="290px">
              <template v-slot:activator="{ on, attrs }">
                  <v-text-field class="pr-4" :rules="rules" v-bind="attrs" v-on="on" label="Date" prepend-icon="mdi-calender" :value="date"
                  ></v-text-field>
              </template>
                  <v-date-picker v-model="date"></v-date-picker>
          </v-menu>
          
          <v-btn depressed class="ma-3 light-green lighten-3 green--text" @click="submit">Upload</v-btn>
        </v-form>
      </v-card>

  </v-dialog>
</template>

<script>
// import db from '@/fb';

export default {
    data() {
        return {
            photo: null,
            date: null,
            rules: [
                pic => !!pic || "File and date are required" 
            ]
        }
    },
    methods: {
        submit() {
            if(this.$refs.form.validate()) {
                console.log(this.date, this.photo.srcs)
            }
        }
    },
}
</script>
