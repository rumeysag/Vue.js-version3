import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  appHeader from "./components/appHeader.vue"
//global registerin 

const app = createApp(App)
app.component("app-header", appHeader)
.use(store)
.use(router)
.mount('#app')

// tüm uygulamada kullanılacak bir css dosyası burada import edilir.
// import "@/assets/style.css"