import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'
import router from '../src/router/index.js'
import 'flowbite'

createApp(App).use(router).mount('#app')
