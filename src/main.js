import { createApp } from "vue";
import App from "@/app.vue";
import router from "@/router/index";
import { BootstrapVue3 } from "bootstrap-vue-3";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "@/assets/design/style.css";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(BootstrapVue3);

app.mount("#app");
