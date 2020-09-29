import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import About from './views/About.vue';
import Photos from './views/Photos.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/photos',
            name: 'photos',
            component: Photos
        }
    ]
})