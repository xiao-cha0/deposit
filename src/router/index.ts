import Vue from 'vue';
import VueRouter from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import Notfound from '@/views/Notfound.vue';
import AddLabel from '@/views/AddLabel.vue';

Vue.use(VueRouter);

const routes = [
  { //默认跳转页面
    path: '/',
    redirect: '/money'
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '*',//'*'表示除了上面4个路径之外的所有路径
    component: Notfound
  },
  {
    path: '/labels/edit/:id',
    component: AddLabel
  }
];

const router = new VueRouter({
  routes
});

export default router;
