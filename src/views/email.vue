<template>
  <div>
      I'm email <br>
      <button @click="handleClick">Click me!</button>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$bus)
    // this.$on('on-click', mes => {
    //   console.log(mes);
    // })
  },
  methods: {
    handleClick() {
      // 为实例添加事件，配对on监听
      // this.$emit('on-click', 'hello');
      this.$bus.$emit('on-click', 'hello');
    }
  }
};
</script>

<style lang="sass">

</style>
