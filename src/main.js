import Vue from 'vue';
import VueTelInput from 'vue-tel-input';
import Notifications from 'vue-notification';
import App from './App.vue';
import router from './router';
import store from './store';
import { i18n } from '@/plugins/i18n';

Vue.config.productionTip = false;

Vue.use(VueTelInput);
Vue.use(Notifications);

new Vue({
  router,
  store,
  i18n,
  render: function(h) {
    return h(App);
  }
}).$mount('#app');
