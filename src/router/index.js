import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes: [
    {
      path: '/archive-markdown-editor',
      name: 'ame',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Index.vue'),
    },
      {
          path: '',
          redirect: '/archive-markdown-editor',
      }
  ],
})

export default router
