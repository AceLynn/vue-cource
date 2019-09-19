<template>
  <div>
    I'm Vue
    <!-- 父子组件通信 -->
    <!-- <a-input v-model="inputValue" />
    <p>{{inputValue}}</p> -->

    <!-- 兄弟组件通信 -->
    <!-- <a-input @input="handleInput" />
    <a-show :content="inputValue" /> -->

    <!-- 假设inputValue非本页面data定义，而是全局store.state里面定义的 -->
    <!-- <a-input v-model="stateValue" /> -->
    <!-- 双向绑定vuex 方法一 -->
    <!-- <a-input :value="stateValue" @input="changeStateValue" />
    <p>{{stateValue}}</p> -->
    <!-- 方法二 -->
    <a-input v-model="stateValue"></a-input>
    <p>{{stateValue}}</p>

    <!-- <p>appname: {{appName}}</p> -->
    <p>username: {{userName}}</p>
    <p>input last letter: {{inputValueLastLetter}}</p>
    <p>appNameWidthVer: {{appNameWidthVer}}</p>
    <p>firstletter: {{firstLetter}}</p>
    <p><button @click="changeAppName">修改appname</button></p>
    <p><button @click="changeAppName2">修改appname2</button></p>
    <p><button @click="changeVersion">修改version</button></p>
    <p>{{appVersion}}</p>
    <p><button @click="registerModule">动态添加模块</button></p>
    <p v-for="(item, index) in todoList" :key="index">{{item}}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput';
import AShow from '_c/AShow';
// import vuex from 'vuex';
// const mapState = vuex.mapState;
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

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
      appVersion: state => state.appVersion,
      // 动态注册模块后，需要在state里注册一下新增的内容
      todoList: state => state.newModuleList ? state.newModuleList.todoList : [],
      // stateValue: state => state.stateValue
    }),
    stateValue: {
      // 手动设置get和set
      get() {
        return this.$store.state.stateValue;
      },
      set(value) {
        this.setStateValue(value);
      }
    },
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
      'setAppVer',
      'setStateValue'
    ]),
    ...mapActions([
      'updateAppName2'
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

      // 严格模式下，不能直接在mutaitions外直接赋值
      // this.$store.state.appName = 'new gamess';
    },
    changeAppName2() {
      // mapMutations里面的函数，可以直接this调用
      // this.updateAppName2('new game');
      this.$store.dispatch('updateAppName2', '123')
    },
    // 动态注册模块
    registerModule() {
      this.$store.registerModule('newModuleList', {
        state: {
          todoList: [
            '学习Mutations',
            '学习Actions'
          ]
        }
      });
      // 这个是给user模块注册动态模块
      // this.$store.registerModule(['user', 'newModuleList'], {
      //   state: {
      //     todoList: [
      //       '学习Mutations',
      //       '学习Actions'
      //     ]
      //   }
      // });

    },
    // 双向绑定 方法一
    changeStateValue(val) {
      this.setStateValue(val)
    }
  }
};
</script>

<style lang="sass">

</style>
