import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/container/Container'
import Login from '@/views/Login'
import Dashboard from '@/views/dashboard'
import Article from '@/views/article'
import Tab from '@/views/tab'
import Tree from '@/views/tree'
import Dialog from '@/views/dialog'
import Icon from '@/views/icon'
import Form from '@/views/form'
import Table from '@/views/table'
import Users from '@/views/manager/users'
import Roles from '@/views/manager/roles/Index'
import Menus from '@/views/manager/menus/Index'
import Manager from '@/views/manager'

Vue.use(Router)

export default new Router({
  mode: 'history', // 注意这里的history 必须带上单引号，否则有可能显示访问不到，不加单引号，这里也不会报错。
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      // redirect: '/login',
      name: 'Container',
      component: Container,
      children: [
        {
          path: 'dashboard',
          name: '首页',
          component: Dashboard,
          icons: 'el-icon-s-home'
        },
        {
          path: 'article',
          name: '文章',
          component: Article,
          icons: 'el-icon-s-comment'
        },
        { path: 'tab', name: '选项卡', component: Tab, icons: 'el-icon-phone' },
        { path: 'tree', name: '树控件', component: Tree, icons: 'el-icon-question' },
        { path: 'dialog', name: '弹窗', component: Dialog, icons: 'el-icon-success' },
        { path: 'icon', name: '图标', component: Icon, icons: 'el-icon-s-flag' },
        { path: 'form', name: '表单', component: Form, icons: 'el-icon-s-finance' },
        { path: 'table', name: '表格', component: Table, icons: 'el-icon-s-grid' },
        {
          path: 'manager',
          name: '系统管理',
          icons: 'el-icon-setting',
          component: Manager,
          children: [
            { path: 'users', name: '用户管理', component: Users, icons: 'el-icon-user' },
            { path: 'roles', name: '角色管理', component: Roles, icons: 'el-icon-s-check' },
            { path: 'menus', name: '菜单管理', component: Menus, icons: 'el-icon-menu' }
          ]
        }
      ]
    }
  ]
})
