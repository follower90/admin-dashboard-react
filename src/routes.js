import Main from './pages/Main'
import Menu from './pages/menu/Index'
import MenuForm from './pages/menu/Edit'
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
    path: '*',
    component: NotFound,
  },
]

export default routes
