import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/dashboard',
        name: 'dashoard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;