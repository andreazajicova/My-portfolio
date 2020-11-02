import Vue from 'vue';
import Router from 'vue-router';
// import Skills from './views/Skills.vue';
// import About from './views/About.vue';
// import Projects from './views/Projects.vue';
import Welcome from './views/Welcome.vue';

Vue.use(Router);

// export default new Router({
//     mode: 'history',
//     base: process.env.BASE_URL,
//     routes: [
//         {
//             path: '/skills',
//             name: 'skills',
//             component: () => import('./views/Skills.vue')
//         },
//         {
//             path: '/about',
//             name: 'about',
//             component: () => import('./views/About.vue')
//         },
//         {
//             path: '/projects',
//             name: 'projects',
//             component: () => import('./views/Projects.vue')
//         },
//         {
//             path: '/',
//             name: 'welcome',
//             component: () => import('./views/Welcome.vue')
//         }
//     ]
// })

const Skills = () =>
    import(/* webpackChunkName: "skills" */'./views/Skills.vue');
const About = () =>
    import(/* webpackChunkName: "about" */'./views/About.vue');
const Projects = () =>
    import(/* webpackChunkName: "projects" */'./views/Projects.vue');

const routes = [
    {
        path: '/skills',
        name: 'skills',
        component: Skills
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects
    },
    {
        path: '/',
        name: 'welcome',
        component: Welcome
    }
]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})