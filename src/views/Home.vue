<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <br>
    {{food}}
    <br>
    <button @click="handlerClick('back')">返回上一页</button>
    <p><button @click="getInfo">获取用户信息</button></p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

// 注释，用自定义的getUserInfo代替axios
// import axios from 'axios';
import {getUserInfo} from '@/api/user'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'pear'
    }
  },
  beforeRouteEnter(to, from, next) {
    // console.log(to, from, next);
    // 获取不到this
    // 结尾要加next，否则不会跳转
    next();
    // next(vm=> {//这边的vm可以获取组件实例})
  },
  beforeRouteLeave(to, from, next) {
    // 比如填写了表单，还未保存，就在跳转前提示
    // const leave = confirm('您确定要离开嘛？');
    // if(leave) next();
    // // next(false)不跳转
    // else next(false);
  },
  methods: {
    handlerClick(type) {
      if (type === 'back') {
        this.$router.go(-1);
      }
    },
    getInfo() {
      getUserInfo().then(res => {
        console.log(res)
      });
    }
  }
};
</script>
