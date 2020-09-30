<template>
  <v-app>
    <Navbar />
    <v-main class="ma-5">
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-avatar size="110" color="orange">
      <v-img src="https://codecrush.unomaha.edu/img/robby-wave-800x600.gif" max-width="120" v-bind="attrs" v-on="on"></v-img></v-avatar>
      </template>
      <span>HELLO, BEAUTIFUL HUMAN!</span>
      </v-tooltip>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: 'App',
  components: { Navbar },
  data () {
    return {

    }
  },
};
</script>
