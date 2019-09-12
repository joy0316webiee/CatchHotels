import Vue from 'vue';
import VueTelInput from 'vue-tel-input';
import Notifications from 'vue-notification';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueTelInput);
Vue.use(Notifications);

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount('#app');
