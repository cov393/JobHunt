import { createApp } from 'vue'
import router from './router/index.js'
import './style.css'
import App from './App.vue'
import HelloWorld from './views/HelloWorld.vue'

const app = createApp(HelloWorld)
app.use(router) 
app.mount('#app')
