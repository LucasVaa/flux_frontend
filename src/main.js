import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // 确保这里引入了router
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(ElementPlus).mount('#app');
