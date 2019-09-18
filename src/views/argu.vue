<template>
  <div>
      <!-- 获取动态 参数 -->
      <!-- {{$route.params.name}} -->
      {{name}}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: [String, Number],
      default: 'Default name'
    }
  },
  beforeRouteUpdate (to, from, next) {
    // 路由发生变化，组件被复用的时候调用
    // 比入一直在argu页，参数变化
    console.log(to, from)
  },
};
</script>

<style lang="sass">

</style>
