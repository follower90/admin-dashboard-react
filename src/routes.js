import Main from './pages/Main'
import Menu from './pages/Menu'
import MenuForm from './pages/MenuForm'
import User from './pages/User'
import NotFound from './pages/NotFound'

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/admin',
    component: Main,
  },
  {
    path: '/admin/menu',
    component: Menu,
  },
  {
    path: '/admin/menu/edit/:id',
    component: MenuForm,
  },
  {
    path: '/admin/user',
    component: User,
  },
  {
    path: '*',
    component: NotFound,
  },
]

export default routes
