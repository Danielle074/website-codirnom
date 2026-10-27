import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router'

const app = createApp(App)
app.use(router)  // Point clé : activez le routeur
app.mount('#app')