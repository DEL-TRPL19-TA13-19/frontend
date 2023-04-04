import { createApp } from "vue";
import App from "@/app.vue";
import router from "@/router/index";
import { BootstrapVue3 } from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App);
app.use(router);
// app.use(store);
app.use(BootstrapVue3);
app.use(FontAwesome, FontAwesomeIcon, library);
app.mount("#app");
