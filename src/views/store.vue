<template>
  <div>
    I'm Vue
    <!-- 父子组件通信 -->
    <!-- <a-input v-model="inputValue" /> -->
    <!-- <p>{{inputValue}}</p> -->

    <!-- 兄弟组件通信 -->
    <a-input @input="handleInput" />
    <a-show :content="inputValue" />
  </div>
</template>

<script>
import AInput from '_c/AInput';
import AShow from '_c/AShow';

export default {
  name: 'store',
  components: {
    AInput,
    AShow
  },
  data() {
    return {
        inputValue: ''
    };
  },
  methods: {
      handleInput(val) {
          this.inputValue = val
      }
  }
};
</script>

<style lang="sass">

</style>
