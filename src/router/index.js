import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    // 이 방식으로 할시, router가 app.js 안에 들어간다.
    // 그러므로 사이트에 접속했을때 맨 처음 보여지는 화면을 이 방식으로 사용하는게 좋다.
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // 이 방식으로 할시, 따로 js 파일이 생긴다
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:
    // prefetch를 사용하면, 지금 당장 사용하지 않지만 가까운 미래에 쓸것 같은 page를 브라우저 캐시에 저장한다.
    // 또는 사이즈가 큰 페이지나를 미리 가져오는게 좋을 것 같은 페이지를 webpackPrefetch를 사용한다.
     () => import(/* webpackChunkName: "about", webpackPrefetch:true */ '../views/AboutView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () => import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingStringView.vue')
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    component: () => import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingHtmlView.vue')
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: () => import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingInputView.vue')
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelectView',
    component: () => import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingSelectView.vue')
  },
  {
    path: '/databinding/checkbox',
    name: 'DataBindingCheckboxView',
    component: () => import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingCheckboxView.vue')
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadioView',
    component: () => import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingRadioView.vue')
  },
  {
    path: '/databinding/attribute',
    name: 'DataBindingAttributeView',
    component: () => import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingAttributeView.vue')
  },
  {
    path: '/databinding/list',
    name: 'DataBindingListView',
    component: () => import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingListView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
