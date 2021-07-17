import Vue from 'vue'
import Router from 'vue-router'
import Login from "../views/Login";
import BlogEdit from "../views/BlogEdit";
import BlogDetail from "../views/BlogDetail";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: {name: 'Blogs'}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/blogs',
      name: 'Blogs',
      //懒加载
      component:()=>import('../views/Blogs.vue')
    },
    {
      path: '/blog/add',
      name: 'BlogAdd',
      meta:{
        requireAuth: true
      },
      component: BlogEdit
    },
    {
      path: '/blog/:blogId',
      name: 'BlogDetail',
      component: BlogDetail
    },
    {
      path: '/blog/:blogId/edit',
      name: 'BlogEdit',
      meta:{
        requireAuth: true
      },
      component: BlogEdit
    }
  ]
})
