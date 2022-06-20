import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from "@/map router/index";

createApp(App)
    .use(router)
    .mount('#app')

createApp(App).mount('#app')
