<template>
  <v-app>
    <Navbar />
    <v-main class="ma-5">
      <v-img src="https://codecrush.unomaha.edu/img/robby-wave-800x600.gif" max-width="120"></v-img>
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
