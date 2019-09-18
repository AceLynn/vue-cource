import Home from '@/views/Home.vue'
export default [{
    path: '/',
    name: 'home',
    // 别名
    alias: '/home_page',
    component: Home,
    props: route => ({
      // route 当前的路由对象
      // 这种写法 router => ({}) = route => {return {}}
      food: route.query.food
    }),
    // 路由独享的守卫，只有这个路径有
    beforeEnter: (to, from, next) => {
      if(from.name === 'about') {
        console.log('这个是从about过来的跳转');
      } else {
        console.log('是从其他页面过来的');
      }
      // 结尾需要next，否则不会跳转
      next();
    }
  },
  {
    path: '/about',
    name: 'about',
    // lazyload加载方法加载组件
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      // food: 'banana'
    },
    meta: {
      // 定义定制信息
      title: 'this is title'
    }
  },
  // 动态路由匹配
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    // 将name当作props属性传入
    props: true
  },
  // 嵌套路由 -》 多层嵌套组件，可以通过嵌套路由实现
  {
    path: '/parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        // 访问路径： parent/child
        // path: '/child', // 子路由不需要斜杆 /
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  // 命名路由 设置name属性
  // 配合router-link使用
  {
    // http://localhost:8080/#/named_view
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue'),
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  // 重定向
  {
    path: '/main',
    // redirect: '/'
    // redirect: {
    //   name: 'home'
    // }
    // redirect: to => {
    //   console.log(to);
    //   return {
    //     name: 'home'
    //   }
    // }
    redirect: to => '/'
  },
  {
    // 配置一个404页面，需要配置在最后面
    // *匹配所有路径，所以放最后，前面的权重大，有页面就直接显示；都没有配置的路径则跳转到404
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
