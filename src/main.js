import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
// 导入组件
import goods from 'components/goods/goods.vue';
import sellers from 'components/sellers/sellers.vue';
import ratings from 'components/ratings/ratings.vue';
import './common/stylus/index.styl';
import axios from 'axios';
Vue.prototype.axios = axios;
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/goods' },
    { path: '/goods', component: goods },
    { path: '/sellers', component: sellers },
    { path: '/ratings', component: ratings }
  ],
  linkActiveClass: 'active'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App }
});
