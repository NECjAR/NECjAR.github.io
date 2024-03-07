import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ComingSoon from '../views/ComingSoon.vue'

const Anna = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: "NECjAR",
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue'),
      meta: {
        title: "NECjAR | About",
      }
    },
    {
      path: '/anna',
      name: 'anna',
      component: () => import('../views/Anna.vue'),
      meta: {
        title: "Anna",
      }
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/PageNotFound.vue'),
      meta: {
        title: "Not Found",
      }
    }
  ]
})

Anna.beforeEach((toRoute, fromRoute, next) => {
   window.document.title = toRoute.meta.title;
   next();
})

export default Anna
