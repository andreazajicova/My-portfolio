import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
// import VueRouter from 'vue-router';
import VueTyperPlugin from 'vue-typer';

// Vue.use(VueRouter);
Vue.use(VueTyperPlugin);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router: router,
  render: h => h(App)
}).$mount('#app')
