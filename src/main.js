import { createApp } from "vue";
import App from "@/app.vue";
import router from "@/router/index";
import { BootstrapVue3 } from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
// import { PaginationPlugin } from 'bootstrap-vue-3';

// Fontawesome
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import "@/assets/design/style.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Pinia
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

const vuetify = createVuetify({
    components,
    directives,
})

app.use(FontAwesome, FontAwesomeIcon, library);
app.use(BootstrapVue3);
app.use(vuetify);
app.use(router);
app.use(pinia);

app.mount("#app");
// app.use(PaginationPlugin);
