import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Profile from '@/components/Profile.vue'
import { useUserStore } from '@/stores/user'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/profile/:username', component: Profile, meta: { requiresAuth: true } },
  { path: '/:pathMatch(.*)*', redirect: '/' } // 404 fallback
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  userStore.loadFromStorage()

  if (to.meta.requiresAuth && !userStore.isLoggedIn) {
    next('/')
  } else {
    next()
  }
})

export default router
