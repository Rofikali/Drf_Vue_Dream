import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostsView from '../views/PostsView.vue'
import PostDetail from '../views/PostDetail.vue'
import PerticularUserPosts from '../views/PerticularUserPosts.vue'


// Define routes, each route should map to a components
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostsView
  },
  {
    // dynamic segments start with a colon
    path: '/posts/:id',
    name: 'postdetail',
    component: PostDetail
  },
  {
    // dynamic segments start with a colon
    path: '/user/:username',
    name: 'useralldata',
    component: PerticularUserPosts
  },
]


// Create the router instance and pass the 'routes' Options. 
const router = createRouter({
  // Provide the history implementation to use 
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})
export default router
