import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import('@/views/Login.vue')
  },
  {
    path: '/sys',
    name: 'sys',
    component: Home,
    redirect: '/sys/firstscreen',
    children: [
      {
        path: 'firstscreen',
        name: 'firstscreen',
        component: () => import('@/views/otherview/FirstScreen.vue'),
        meta: {
          title: "概览首屏"
        }
      },
      {
        path: 'privilege',
        name: 'privilege',
        component: () => import('@/views/sysmanage/privilege/index.vue'),
        meta: {
          title: "权限管理"
        }
      },
      {
        path: 'role',
        name: 'roles',
        component: () => import('@/views/sysmanage/roles/index.vue'),
        meta: {
          title: "角色管理"
        }
      },
      {
        path: 'user',
        name: 'users',
        component: () => import('@/views/sysmanage/users/index.vue'),
        meta: {
          title: "用户管理"
        }
      },
      {
        path: 'menu',
        name: 'menus',
        component: () => import('@/views/sysmanage/menus/index.vue'),
        meta: {
          title: "菜单管理"
        }
      }
    ]
  },
  
]


const router = new VueRouter({
  routes
})
// 设置路由守卫，[请求鉴权接口 暂不介入也可以]，设置放行和转跳的逻辑
router.beforeEach((to,from,next)=> {
  if(to.path === '/') {
    if(localStorage.getItem("userdetail")) {
      next('/sys/firstscreen')
    } else {
      next('/login')
    }
  } else if (to.path === '/login') {
    if(localStorage.getItem("userdetail")) {
      next('/sys/firstscreen')
    } else {
      next()
    }
  } else {
    if(localStorage.getItem("userdetail")) {
      next()
    } else {
      next('/login')
    }
  }
})
export default router
