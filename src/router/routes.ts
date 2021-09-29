import { RouteRecordRaw } from 'vue-router'
import Home from '@/page/home.vue'
import NotFound from '@/page/page-not-found.vue'
import NotAuth from '@/page/page-not-auth.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Main',
        component: Home,
        meta: {
            title: '哔哩哔哩 - ( ゜- ゜)つロ 干杯~',
        },
        children: [
            {
                path: '/home',
                name: 'Home',
                component: Home,
            },
        ],
    },
    {
        path: '/:pathMatch(.*)',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: '404 - Not Found',
        },
    },
    {
        path: '/not-auth',
        name: 'NotAuth',
        component: NotAuth,
        meta: {
            title: '403 - Forbidden',
        },
    },
]

export default routes
