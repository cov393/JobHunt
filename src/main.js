import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import './style.css'
import App from './App.vue'
import JobDetails from './views/JobDetails.vue'
import JobSearch from './views/JobSearch.vue'
import JobItem from './views/JobItem.vue'

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
        name: 'job_details',
        path: '/job_details',
        components: {
            default: JobDetails,
        },
        props: true,
        children: [
            {
                name: 'single-application',
                path: ':title',
                component: JobItem,
                props: true,
            },
        ],
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
