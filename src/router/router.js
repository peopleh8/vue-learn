import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/pages/Homepage'
import About from '@/pages/About'
import Posts from '@/pages/Posts'
import Post from '@/pages/Post'

const routes = [
  {
    path: '/',
    component: Homepage,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/posts',
    component: Posts,
  },
  {
    path: '/posts/:id',
    component: Post,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router