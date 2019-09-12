require('./bootstrap2');

window.Vue = require('vue');
window.axios = require('axios');
window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
};

import 'babel-polyfill';
import router from "./routes/routes";
// import VueSignaturePad from 'vue-signature-pad';
// import VeeValidate from "vee-validate";
import Lang from "vuejs-localization";
// Vue.use(VeeValidate);
// Vue.use(VueSignaturePad);
Vue.use(Lang, {
    default : 'en'
});
Lang.requireAll(require.context('./lang', true, /\.js$/));

Vue.component('layout', require('./components/layouts/LayoutComponent').default);
Vue.component('vehicle-search', require('./components/parts/VehicleSearchComponent').default);

const airbag = new Vue({
    el: '#app',
    router,
});


