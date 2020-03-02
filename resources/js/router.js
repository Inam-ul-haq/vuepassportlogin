import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Pages
import NotFound from './views/NotFound'
import Login from './views/Login'
import Logout from './views/Logout'
import Dashboard from './views/Dashboard'

// Routes
const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/logout',
            name: 'logout',
            component: Logout,
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                requiresAuth: true,
            }
        },
        { 
            path: '/404', 
            name: '404', 
            component: NotFound,
        },
        { 
            path: '*', 
            redirect: '/404', 
        },
    ],
});

export default router