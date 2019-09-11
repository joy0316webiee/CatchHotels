import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: 'home',
      component: () => import('@/components/Layout'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/pages/Home')
        }
      ]
    }
  ]
});
