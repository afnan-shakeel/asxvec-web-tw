import { createRouter, createWebHistory } from 'vue-router'
import SessionLayout from './layouts/SessionLayout.vue'
import LoginLayout from './layouts/LoginLayout.vue'
import Login from './pages/Login.vue'
import Test from './pages/Test.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Test',
      path: '/test',
      component: Test,
      meta: { layout: LoginLayout }
    },
    {
      name: 'Login',
      path: '/login',
      component: Login,
      meta: { layout: LoginLayout }
    },
    {
      name: 'Profile',
      path: '/',
      component: () => import('./pages/Profile.vue'),
      meta: { layout: SessionLayout }
    },
    {
      name: 'Contact',
      path: '/contact',
      component: ()=> import('./pages/Contact.vue'),
      meta: { layout: SessionLayout }
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: ()=> import('./pages/Dashboard.vue'),
      meta: { layout: SessionLayout }
    },
    {
      name: 'Form',
      path: '/form',
      component: ()=> import('./pages/Form.vue'),
      meta: { layout: SessionLayout }
    },
    {
      name: 'User',
      path: '/user',
      component: () => import('./pages/User.vue'),
      meta: { layout: SessionLayout }
    },
    {
      name: 'Blog',
      path: '/blog',
      component: ()=> import('./pages/Blog.vue'),
      meta: { layout: SessionLayout }
    },
    {
      name: 'Time-line',
      path: '/time-line',
      component: ()=> import('./pages/TimeLine.vue'),
      meta: { layout: SessionLayout }
    },
    {
      name: 'History Timeline',
      path: '/history-timeline',
      component: ()=> import('./pages/PalestineIsrael.vue'),
      meta: { layout: SessionLayout }
    },
    {
      name: 'Calender',
      path: '/calender',
      component: ()=> import('./pages/Calender.vue'),
      meta: { layout: SessionLayout }
    },

  ],
})
