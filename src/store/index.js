import { createStore } from 'vuex';

export default createStore({
	state: {
		allCheckedValues: [],
		showJsonResult: true,
		finalJson: {},
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
		isJsonResult(state, payload) {
			state.showJsonResult = payload;
		},
		updatefinalJson(state, payload) {
			state.finalJson = payload;
		},
	},
	actions: {
		makeJsonTrue({ commit }) {
			commit('isJsonResult', true);
		},
	},
	modules: {},
});
