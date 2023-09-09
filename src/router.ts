import { createRouter, createWebHistory } from 'vue-router'
import  SessionLayout  from './layouts/SessionLayout.vue'
import Dashboard from './pages/Dashboard.vue'
import Form from './pages/Form.vue'
import User from './pages/User.vue'
import Blog from './pages/Blog.vue'
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: Dashboard,
      meta: { layout: SessionLayout }
    },
    {
      name: 'Form',
      path: '/form',
      component: Form,
      meta: { layout: SessionLayout }
    },
    {
      name: 'User',
      path: '/user',
      component: User,
      meta: { layout: SessionLayout }
    },
    {
      name: 'Blog',
      path: '/blog',
      component: Blog,
      meta: { layout: SessionLayout }
    },

  ],
})
