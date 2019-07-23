import Vue from 'vue';
import VueRouter from "vue-router";

const HomeComponent = () => import('../components/HomeComponent');
const QuickFactsComponent = () => import('../components/QuickFactsComponent');
const FreeRepairComponent = () => import('../components/FreeRepairComponent');
const SpreadTheWorldComponent = () => import('../components/SpreadTheWorldComponent');
const VinLookupComponent = () => import('../components/VinLookupComponent');

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


