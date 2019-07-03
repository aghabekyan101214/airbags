import Vue from 'vue';
import VueRouter from "vue-router";

import UnsubscribeComponent from '../components/UnsubscribeComponent';

Vue.use(VueRouter);
const routes = [
    { path: '/unsubscribe', component: UnsubscribeComponent },
];

const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: "active",
});

export default router


