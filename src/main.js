import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "jquery";
import "popper.js";
import "normalize.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import "./scss/main.scss";


createApp(App)
    .use(store)
    .use(router)
    .mount("#app");
