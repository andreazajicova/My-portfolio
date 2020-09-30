<template>
<nav>
  <v-app-bar flat app color="light-green lighten-3">
      <v-app-bar-nav-icon class="green--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase green--text text-darken-3">
          <span class="font-weight-light">
              Todo
          </span>
          <span>
              Andrea
          </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- DROPDOWN MENU --> 
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn 
                    class="light-green lighten-3 green--text" depressed 
                    v-bind="attrs" 
                    v-on="on"
                >MENU
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    
                </v-list-item>
            </v-list>
        </v-menu>

        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn 
                    class="light-green lighten-3 green--text" depressed 
                    v-bind="attrs" 
                    v-on="on"
                ><v-icon>exit_to_app</v-icon>LOG OUT
                </v-btn>
            </template>
            <v-list>
                <v-list-item>
                    <v-list-item-title>
                        <v-icon>login</v-icon>
                    LOG IN
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

          <!-- <v-btn text>
              <span class="green--text text-darken-3">Logout</span>
              <v-icon right class="green--text text-darken-3">exit_to_app</v-icon>
          </v-btn> -->
  </v-app-bar>

<v-navigation-drawer v-model="drawer" app class="amber accent-2">
    <v-layout column align-center>
        <v-flex>
        <v-img src="../assets/desktop.jpeg">
        </v-img>
        </v-flex>
        <v-flex class="my-3">
            <Dialog />
        </v-flex>
    </v-layout>
    
   <v-list rounded>
       <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
           <v-list-item-icon>
               <v-icon>{{ link.icon }}</v-icon>
           </v-list-item-icon>
           <v-list-item-content>
               <v-list-item-title>{{ link.text }}</v-list-item-title>
           </v-list-item-content>
       </v-list-item>
   </v-list>
</v-navigation-drawer>

  </nav>
</template>

<script>
import Dialog from './Dialog';

export default {
    components: {
        Dialog
    },
    data() {
        return {
            drawer: null,
            links: [
                { icon: 'dashboard', text: 'Dashboard', route: '/'},
                { icon: 'folder', text: 'My Photos', route: '/photos'},
                { icon: 'person', text: 'About Me', route: '/about'}
            ]
        }
    }
}
</script>

<style>

</style>