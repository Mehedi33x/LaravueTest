import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';
import Contact from '../components/Contact.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
