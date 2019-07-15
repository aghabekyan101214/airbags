import Vue from 'vue';
import VueRouter from "vue-router";

import HomeComponent from "../components/HomeComponent";
import QuickFactsComponent from "../components/QuickFactsComponent";
import RecallComponent from "../components/RecallComponent";
import SpreadTheWorldComponent from "../components/SpreadTheWorldComponent";

Vue.use(VueRouter);
const routes = [
    { path: '/', component: HomeComponent},
    { path: '/quick-facts', component: QuickFactsComponent},
    { path: '/recall', component: RecallComponent},
    { path: '/spread-the-world', component: SpreadTheWorldComponent},
];

const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: "active",
});

export default router


