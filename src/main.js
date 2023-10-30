import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // 确保这里引入了router

createApp(App).use(router).mount('#app');
