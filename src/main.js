import Vue from 'vue'
import App from './app/app.vue'
import './styles.scss'

import VueResource from 'vue-resource'

Vue.config.productionTip = false;
Vue.use(VueResource);

// Vue.http.options.root = '/';

new Vue({
  render: h => h(App)
}).$mount('#app')
