import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import FontAwesomeIcon from './plugins/font-awesome'

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
