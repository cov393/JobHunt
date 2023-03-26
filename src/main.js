import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import Axios from 'axios';
import './style.css'
import App from './App.vue'
import JobDetails from './views/JobDetails.vue'
import JobSearch from './views/JobSearch.vue'

// createApp(App).mount('#app')

const route = [
    {
        path: '/',
        name: 'app',
        component: App,
        redirect: '/job_search',
    },
    {
        name: 'job_search',
        path: '/job_search',
        components: { default: JobSearch },
    },
    {
        path: '/job_details',
        components: {
            default: JobDetails,
        },
        props: true,
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: route,
    linkActiveClass: 'active',
});

const app = createApp(App);
app.use(router);
app.mount("#app")
