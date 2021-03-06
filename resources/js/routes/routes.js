import Vue from 'vue';
import VueRouter from "vue-router";

// const HomeComponent = () => import('../components/HomeComponent');
// const QuickFactsComponent = () => import('../components/QuickFactsComponent');
// const FreeRepairComponent = () => import('../components/FreeRepairComponent');
// const SpreadTheWorldComponent = () => import('../components/SpreadTheWorldComponent');
// const SharedVideoComponent = () => import('../components/SharedVideoComponent');
// const VinLookupComponent = () => import('../components/VinLookupComponent');
// // const UnsubscribeComponent = () => import('../components/UnsubscribeComponent');
// const CarfaxComponent = () => import('../components/CarfaxComponent');

import HomeComponent from "../components/HomeComponent";
import QuickFactsComponent from "../components/QuickFactsComponent";
import FreeRepairComponent from "../components/FreeRepairComponent";
import SpreadTheWorldComponent from "../components/SpreadTheWorldComponent";
import SharedVideoComponent from "../components/SharedVideoComponent";
import VinLookupComponent from "../components/VinLookupComponent";
import CarfaxComponent from "../components/CarfaxComponent";

const prefixWith = (prefix, routes) =>
    routes.map((route) => {
        route.path = prefix + route.path;
        return route;
    });
Vue.use(VueRouter);

const routes = [
    ...prefixWith('/:lang?', [
        {path: '/', component: HomeComponent},
        {path: '/home', component: HomeComponent},
        {path: '/quick-facts', component: QuickFactsComponent},
        {path: '/free-repair', component: FreeRepairComponent},
        {path: '/spread-the-word', component: SpreadTheWorldComponent},
        {path: '/spread-the-word/video/:id', component: SharedVideoComponent},
        {path: '/vin-lookup', component: VinLookupComponent},
        {path: '/carfax', component: CarfaxComponent},
        {path: '*', component: HomeComponent}
    ]),
];

const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: "active",
});

// router.beforeEach((to, from, next) => {
//     if(to.path.split("/")[1] === "en" || to.path.split("/")[1] === "es") {
//         next();
//     } else {
//         next('/en' + to.path);
//     }
// });

export default router
