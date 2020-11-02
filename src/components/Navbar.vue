<template>
  <nav fixed="top">
    <v-app-bar flat app color="grey darken-2">
        <v-app-bar-nav-icon class="grey lighten-1" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase grey--text text--lighten-4">
          <span class="font-weight-light">
              Portfolio
          </span>
          <span>
              Andrea Zajicova
          </span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- DROPDOWN MENU --> 
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn 
              class="grey lighten-1 grey--text text--darken-3" depressed 
              v-bind="attrs" 
              v-on="on"
            > 
            MENU
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
              <v-list-item-title>{{ link.text }}</v-list-item-title>        
            </v-list-item>
          </v-list>
        </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="blue darken-3">
      <v-layout column align-center>
        <v-flex>
          <v-img class="mt-14" src="../assets/images/Optimized-profile photo.jpg" max-width="150px">
          </v-img>
          <h4 class="grey--text text--lighten-2 text-center mt-3">Andrea Zajicova</h4>
          <p class="grey--text text--lighten-2 text-center mb-10">FullStack developer</p>
        </v-flex>
      </v-layout>
        <v-list rounded>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="grey--text text--lighten-2">{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'insert_emoticon', text: 'Welcome', route: '/'},
        { icon: 'dashboard', text: 'My Skills', route: '/skills'},
        { icon: 'folder', text: 'My Projects', route: '/projects'},
        { icon: 'person', text: 'About Me', route: '/about'}
      ]
    }
  }
}
</script>
