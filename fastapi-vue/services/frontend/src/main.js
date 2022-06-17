import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

import { createApp } from 'vue'
import App from './App.vue';
import router from './router';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:5000/';  // the FastAPI backend

createApp(App).use(router).mount('#app')
