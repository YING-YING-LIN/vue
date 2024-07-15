import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BmiView from '../views/BmiView.vue'
import DiceView from '../views/DiceView.vue'
import DiceGamwView from '../views/DiceGameView.vue'
import MoraView from '../views/MoraView.vue'
import RockView from '../views/RockView.vue'
import WeatherCard from '../views/WeatherCard.vue'
//下面可以使用的名稱是從哪一隻檔案過來的


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bmi',
      name: 'bmi',
      component: BmiView
    },
    {
      path: '/dice',
      name: 'dice',
      component: DiceView
    },
    {
      path: '/dicegame',
      name: 'dicegmae',
      component: DiceGamwView
    },
    {
      path: '/mora',
      name: 'mora',
      component: MoraView
    },
    {
      path: '/rock',
      name: 'rock',
      component: RockView
    },
    {
      path: '/card',
      name: 'card',
      component: WeatherCard
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
