// 将store持久化保存到本地的插件
export default store => {
  // 每次实例初始化的时候调用
  // console.log('store init...');
  if(localStorage.state) {
    // 错误赋值
    // store.state = xxx;

    // 正确
    store.replaceState(JSON.parse(localStorage.state));
  }
  store.subscribe((mutations, state) => {
    // 每次提交mutaitions的时候都会调用的回调函数
    // console.log('提交mutations')
    // 每次提交的时候都将state保存到本地
    localStorage.state = JSON.stringify(state);
  });
}
