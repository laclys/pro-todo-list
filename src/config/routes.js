// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'
export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app/:id',
    path: '/app',
    // props: (route) => ({id: route.query.b}),
    component: () => import('../views/todo/todo.vue'),
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'asd'
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  }
]