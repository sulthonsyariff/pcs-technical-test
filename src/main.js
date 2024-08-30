import { createApp } from 'vue'
import { createPinia } from 'pinia';
import router from './router'
import App from './App.vue'
import FontAwesomeIcon from './plugins/font-awesome'
import './style.css'

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
