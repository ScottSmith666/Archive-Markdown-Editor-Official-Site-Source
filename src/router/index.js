import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes: [
    {
      path: '/index',
      name: 'ame',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Index.vue'),
    },
      {
          path: '',
          redirect: '/index',
      }
  ],
})

export default router
