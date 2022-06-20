import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

import { createApp } from 'vue'
import App from './App.vue';
import router from './router';
import store from './store';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:5000/';  // the FastAPI backend


axios.interceptors.response.use(undefined, function (error) {
    if (error) {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            store.dispatch('logOut');
            return router.push('/login')
        }
    }
});

//createApp(App).use(router).use(store).mount('#app')
createApp(App).use(store).use(router).mount('#app')
