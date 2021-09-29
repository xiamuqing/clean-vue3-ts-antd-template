import { createRouter, createWebHistory } from 'vue-router'
import menu from './routes'


const router = createRouter({
  history: createWebHistory(),
  routes : menu,
})

router.beforeEach((to, from, next) => {
  const title: unknown = to?.meta?.title || from?.meta?.title || ''
  if (title) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      document.title = title
  }
  next()
})

export default router
