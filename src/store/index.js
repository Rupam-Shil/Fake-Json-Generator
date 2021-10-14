import { createStore } from 'vuex';

export default createStore({
	state: {
		allCheckedValues: [],
	},
	mutations: {
		pushToCheckedValues(state, payload) {
			state.allCheckedValues.push(payload);
		},
		removeFromCheckedValues(state, payload) {
			state.allCheckedValues = state.allCheckedValues.filter((el) => {
				return el !== payload;
			});
		},
	},
	actions: {},
	modules: {},
});
