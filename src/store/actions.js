import {
  getAppName
} from '@/api/getAppName';

const actions = {
  updateAppName2({
    commit
  }) {
    getAppName()
      .then(res => {
        // console.log(res);
        // es6解构赋值
        const {info:{appName}} = res;
        commit('updateAppName', appName);
      })
      .catch(err => {
          console.log(err);
      });
  }
};

export default actions;
