import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Booklist from '../views/Booklist.vue'
import Card from '../components/book_card.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'Booklist',
    component: Booklist
  },
  {
    path: '/card',
    name: 'CardPage',
    component: Card
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
