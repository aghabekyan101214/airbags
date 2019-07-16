import Vue from 'vue';
import VueRouter from "vue-router";

import HomeComponent from "../components/HomeComponent";
import QuickFactsComponent from "../components/QuickFactsComponent";
import FreeRepairComponent from "../components/FreeRepairComponent";
import SpreadTheWorldComponent from "../components/SpreadTheWorldComponent";
import VinLookupComponent from "../components/VinLookupComponent";

Vue.use(VueRouter);
const routes = [
    { path: '/', component: HomeComponent},
    { path: '/quick-facts', component: QuickFactsComponent},
    { path: '/free-repair', component: FreeRepairComponent},
    { path: '/spread-the-world', component: SpreadTheWorldComponent},
    { path: '/vin-lookup', component: VinLookupComponent},
];

const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: "active",
});

export default router


