import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
// import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

// createApp(App).use(store)

const app = createApp(App)
app.use(store)
app.use(VueAxios, axios)

app.mount('#app')
