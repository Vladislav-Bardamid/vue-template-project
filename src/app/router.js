import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardComponent from './dashboard/dashboard.vue';
import MessagesComponent from './messages/messages.vue';
import AppPeopleAll from './people/people-all/people-all.vue';

Vue.use(VueRouter)

const routes = [
    { path: '/', component: DashboardComponent },
    { path: '/people/all', component: AppPeopleAll },
    { path: '/messages', component: MessagesComponent }
    //{path: '/about',name: 'About',component: () => import('../views/About.vue')}
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
