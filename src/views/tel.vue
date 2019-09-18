<template>
  <div>
      I'm tel <br>
      {{message}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    // 给bus实例添加事件监听
    this.$bus.$on('on-click', (mes) => {
      this.message = mes;
    })
  }
};
</script>

<style lang="sass">

</style>
