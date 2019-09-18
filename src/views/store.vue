<template>
  <div>
    I'm Vue
    <!-- 父子组件通信 -->
    <!-- <a-input v-model="inputValue" /> -->
    <!-- <p>{{inputValue}}</p> -->

    <!-- 兄弟组件通信 -->
    <a-input @input="handleInput" />
    <a-show :content="inputValue" />

    <!-- <p>appname: {{appName}}</p> -->
    <p>username: {{userName}}</p>
    <p>input last letter: {{inputValueLastLetter}}</p>
    <p>appNameWidthVer: {{appNameWidthVer}}</p>
    <p>firstletter: {{firstLetter}}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput';
import AShow from '_c/AShow';
// import vuex from 'vuex';
// const mapState = vuex.mapState;
import { mapState, mapGetters } from 'vuex';

// import { createNamespacedHelpers } from 'vuex';
// const { mapState } = createNamespacedHelpers('user');

export default {
  name: 'store',
  components: {
    AInput,
    AShow
  },
  data() {
    return {
      inputValue: ''
      // appName: ''
    };
  },
  computed: {
    // ...mapState(['appName']),
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName
    }),
    // ...mapState({
    //   userName: state => state.userName
    // }),
    // 无命名空间时，可以直接获得。否则需要使用 ...mapGetters('user', ['firstLetter]);
    ...mapGetters([
        'appNameWidthVer',
        'firstLetter'
    ]),
    // appNameWidthVer() {
    //   return this.$store.getters.appNameWidthVer;
    // },
    // firstLetter() {
    //     return this.$store.user.getters.firstLetter;
    // },
    // appName() {
    //   // 获取store中的变量值
    //   return this.$store.state.appName;
    // },
    // userName() {
    //   return this.$store.state.user.userName;
    // }
    inputValueLastLetter() {
      return this.inputValue.substr(-1, 1);
    }
  },
  methods: {
    handleInput(val) {
      this.inputValue = val;
    }
  }
};
</script>

<style lang="sass">

</style>
