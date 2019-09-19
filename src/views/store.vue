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
    <p><button @click="changeAppName">修改appname</button></p>
    <p><button @click="changeVersion">修改version</button></p>
    <p>{{appVersion}}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput';
import AShow from '_c/AShow';
// import vuex from 'vuex';
// const mapState = vuex.mapState;
import { mapState, mapGetters, mapMutations } from 'vuex';

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
      userName: state => state.user.userName,
      appVersion: state => state.appVersion
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
    ...mapMutations([
      'updateAppName',
      'setAppVer'
    ]),
    handleInput(val) {
      this.inputValue = val;
    },
    changeVersion() {
      this.setAppVer();
    },
    // changeAppName() {
    //   // this.$store.commit('updateAppName', {
    //   //   appName: 'newAppName#'
    //   // });
    //  // 对象调用方式
    //   this.$store.commit({
    //     type: 'updateAppName',
    //     appName: 'newAppName#'
    //   });
    // },
    changeAppName() {
      // mapMutations里面的函数，可以直接this调用
      this.updateAppName('new game');
    }
  }
};
</script>

<style lang="sass">

</style>
