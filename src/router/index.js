import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import {setTitle} from '@/lib/util'


Vue.use(Router)

// export default new Router({
//   // routes: routes
//   // 两种写法都可以
//   routes,
//   // 模式 history,需要后端设置访问不到的页面统一定位到某个静态页面
//   // mode: 'history'
// })

// 导航守卫
const router = new Router({
  routes
});

// 假设登录态
// const HAS_LOGINED = true;
const HAS_LOGINED = true;

// 全局导航守卫，比如登录校验，权限判断
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title);
  if (to.name != 'login') {
    // 访问非login页，需要判断权限
    if (HAS_LOGINED) {
      // 如果已登录，跳转
      next();
    } else {
      // next同push写法
      // 可用name或者path
      next({name: 'login'});
    }
  } else {
    // 如果访问login页面
    if(HAS_LOGINED) {
      // 已经登录就直接去home或者个人中心，不用在login了
      next({name: 'home'});
    } else {
      // 否则就去login页吧
      next();
    }
  }
});

// 所有页面跳转后的判断逻辑
router.afterEach((to, from) => {
  // login效果去掉
  // 一般before加个login动效，在after这里取消
});

// 导航被确认前，所有路由器调用前调用
// router.beforeResolve();

/**
 * 导航完整的流程：
 * 1. 导航被触发
 * 2. 在失活的组件（即将离开的页面组件）里调用离开守卫 beforeRouterLeave
 * 3. 调用全局的前置守卫 beforeEach
 * 4. 在重用的组件里调用更新守卫 beforeRouteUpdate；(如果不是复用组件，就调用beforeRouteEnter 这俩守卫是同级的)
 * 5. 调用路由独享的守卫 beforeEnter
 * 6. 解析异步路由组件
 * 7. 在被激活的组件里（即将进入的页面组件）里调用 beforeRouteEnter
 * 8. 调用全局的解析守卫 beforeResolve
 * 9. 导航被确认
 * 10.调用全局的后置守卫 afterEach
 * 11.触发DOM更新渲染
 * 12.用创建好的实例调用beforeRouterEnter守卫里传给next的回调函数
 */

export default router;
