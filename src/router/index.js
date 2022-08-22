import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../layout/HomeLayout.vue'),
        children: [
            {
              path: '/',
              component: () => import('../views/Home.vue'),
              name: 'HomePage',
            //   meta: { title: i18n.t('billing.balance.title') },
            },
          ],
    },
    // {
    //     path: '/:catchAll(.*)',
    //     component: Error
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router