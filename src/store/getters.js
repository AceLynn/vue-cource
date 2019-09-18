const getters = {
  // 类似computed的用法；获取state，而后修改，重新输出
  appNameWidthVer: (state) => {
    // return state.appName + 'v2.0';
    return `${state.appName} v2.0`;
  }
}

export default getters;
