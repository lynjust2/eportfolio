import { createApp } from 'vue'
import './style.css'
import 'quasar/dist/quasar.css'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

createApp(App).use(Quasar, quasarUserOptions).mount('#app')
