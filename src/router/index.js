import Vue from 'vue';
import VueRouter from 'vue-router';
import Quotation from '../views/Quotation.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/quotation',
    name: 'Quotation',
    component: Quotation,
    props: {
      title: 'Cotação',
      isVisible: true,
      icon: 'mdi-account',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
