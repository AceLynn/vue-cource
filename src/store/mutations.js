import vue from 'vue';
// mutations只能做同步操作，如果修改的值从接口异步获取，需要用到actions
const mutatations = {
  updateAppName(state, payload) {
    state.appName = payload;
    // 如果页面调用用的对象调用，payload也是对象，改为对象获取属性设置
    // state.appName = payload.appName;
  },
  setAppVer(state) {
    // 无效，因为原先没有设定
    // state.appVer = 'new ver';

    vue.set(state, 'appVersion', '200')
  },
  setStateValue(state, payload) {
    state.stateValue = payload;
  }
}
export default mutatations
