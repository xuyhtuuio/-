import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import webSee from 'web-see';

Vue.use(webSee, {
  dsn: 'http://localhost:8083',
  apikey: '项目1',
  silentRecordScreen: true,
  userId: '123'
});

Vue.use(ElementUI, { size: 'mini' });
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
