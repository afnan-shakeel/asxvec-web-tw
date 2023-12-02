import { createRouter, createWebHistory } from 'vue-router'
import SessionLayout from './layouts/SessionLayout.vue'
import LoginLayout from './layouts/LoginLayout.vue'
import Login from './pages/Login.vue'
import Dashboard from './pages/Dashboard.vue'
import Profile from './pages/Profile.vue'
import Form from './pages/Form.vue'
import User from './pages/User.vue'
import Blog from './pages/Blog.vue'
import TimeLine from './pages/TimeLine.vue'
import PalestineIsrael from './pages/PalestineIsrael.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Login',
      path: '/',
      component: Login,
      meta: { layout: LoginLayout }
    },
    {
      name: 'Profile',
      path: '/profile',
      component: Profile,
      meta: { layout: SessionLayout }
    },
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
    {
      name: 'Time-line',
      path: '/time-line',
      component: TimeLine,
      meta: { layout: SessionLayout }
    },
    {
      name: 'History Timeline',
      path: '/history-timeline',
      component: PalestineIsrael,
      meta: { layout: SessionLayout }
    },

  ],
})
