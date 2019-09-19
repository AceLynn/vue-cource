const state = {
  userName: 'username 111'
};

const getters = {
  firstLetter: (state) => {
    return state.userName.substr(1, 1);
  }
};

const action = {
  // state为user.js的state；rootState为index.js的state
  updateUserName({commit, state, rootState, dispatch}) {
    // rootState.appName = 'xxx';
    dispatch('xxx', '');
  },
  xxx () {

  }
};

const mutation = {

};

export default {
  // 命名空间看情况使用，如果使用，getters使用会相对麻烦一点
  // 命名空间可以保护模块内容
  // namespaced: true,
  getters,
  state,
  action,
  mutation
}
