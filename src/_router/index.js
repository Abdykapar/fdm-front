import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/admin/AdminLayout.vue'),
    children: [
      {
        path: '/',
        name: 'AdminHome',
        component: () => import('@/views/admin/Home.vue')
      },
      {
        path: '/technician',
        name: 'AdminTechnician',
        component: () => import('@/views/admin/Technician.vue')
      },
      {
        path: '/data-list',
        name: 'AdminDataList',
        component: () => import('@/views/technician/DataList.vue')
      },
    ]
  },
  {
    path: '/super-admin',
    name: 'SuperAdmin',
    component: () => import('@/components/admin/AdminLayout.vue'),
    children: [
      {
        path: '/',
        name: 'SuperAdminHome',
        component: () => import('@/views/super-admin/SuperAdmin.vue')
      },
      {
        path: '/country',
        name: 'Country',
        component: () => import('@/views/super-admin/Country.vue')
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('@/views/super-admin/City.vue')
      },
      {
        path: '/navbar',
        name: 'Navbar',
        component: () => import('@/views/super-admin/Navbar.vue')
      },
      {
        path: '/permission',
        name: 'Permission',
        component: () => import('@/views/super-admin/Permission.vue')
      },
      {
        path: '/role',
        name: 'Role',
        component: () => import('@/views/super-admin/Role.vue')
      },
      {
        path: '/airline',
        name: 'Airline',
        component: () => import('@/views/super-admin/Airline.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('@/views/ForgotPassword.vue')
  },
  {
    path: '/password-recovery',
    name: 'PasswordRecovery',
    component: () => import('@/views/PasswordRecovery.vue')
  },
  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
