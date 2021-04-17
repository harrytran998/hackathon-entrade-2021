import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import Callback from './views/callback.vue'
import HomeLoggedIn from './views/HomeLoggedIn.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/callback',
    meta: { title: 'Callback to get token' },
    component: Callback,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: '/home-loggedin',
    meta: { title: 'Welcome home' },
    component: HomeLoggedIn,
    props: true,
    name: 'home-loggedin',
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  { path: '/:path(.*)', component: NotFound },
]
