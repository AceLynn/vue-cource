const state = {
  userName: 'username 111'
};

const getters = {
	firstLetter: (state) => {
		return state.userName.substr(1, 1);
	}
};

const action = {

};

const mutation = {

};

export default {
	// 命名空间看情况使用，如果使用，getters使用会相对麻烦一点
	// namespaced: true,
	getters,
  state,
  action,
  mutation
}
