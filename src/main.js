import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { defineComponent, h } from 'vue';
import { createRouter, createWebHistory, RouterView } from 'vue-router';

const RouteComponent = defineComponent((_, { slots }) => () => h(RouterView, slots.default));
const routes = [
  {
    path: '/',
    redirect: { name: 'organization-index' },
  },
  {
    path: '/organizations',
    name: 'organization-index',
    component: RouteComponent,
  },
  {
    path: '/organizations/:id/settings',
    name: 'organization-settings',
    component: RouteComponent,
  },
];

export const router = createRouter({
  strict: true,
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  if (!to.params.orgId) {
    const { name, path, query, params, fullPath } = to;
    // console.log(to, from);
    console.log('Full Path', fullPath);
    return { name, query, params: { ...params, orgId: '1' } };
  }
});

createApp(App).use(router).mount('#app')
