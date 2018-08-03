import Vue from 'vue'

import VueRouter from 'vue-router'

import Dingdan from '../pages/dingdan/Dingdan'
import Msite from '../pages/msite/Msite'
import Profile from '../pages/profile/Profile'
import Search from '../pages/search/Search'
import Login from '../pages/Login/Login'
import Shops from '../pages/Shops/Shops'
import ShopGoods from '../pages/Shops/ShopGoods/ShopGoods'
import Shopinfo from '../pages/Shops/Shopinfo/Shopinfo'
import Shoprating from '../pages/Shops/Shoprating/Shoprating'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:Msite,
      meta:{
        showFoot:true
      }
     },
    {
      path:'/dingdan',
      component:Dingdan,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/shops',
      component:Shops,
      children:[
        {
          path:'/shop/rating',
          component:Shoprating,
        },
        {
          path:'/shop/info',
          component:Shopinfo,
        },
        {
          path:'/shop/goods',
          component:ShopGoods,
        },
      ]
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/',
      redirect:'/msite'
    }
  ]
})

