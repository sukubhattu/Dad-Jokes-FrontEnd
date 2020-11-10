import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Import axios
import axios from "axios";

export const store = new Vuex.Store({
	state: {
		jokes: [],
	},
	getters: {
		listJokes(state) {
			return state.jokes;
		},
	},
	mutations: {
		getJokes(state) {
			axios
				.get("api/v1/")
				.then((res) => {
					// console.log(res.data);
					state.jokes = res.data;
					return state.jokes;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		addJoke(state, punchLine, clearJoke) {
			axios
				.post("api/v1/create/", { punchLine: punchLine })
				.then((res) => {
					state.jokes = [res.data, ...state.jokes];
					clearJoke;
					console.log(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
	actions: {
		getJokes(context) {
			context.commit("getJokes");
		},
		addJoke({ commit }, payload) {
			commit("addJoke", payload.punchLine, payload.clearJoke());
		},
	},
});
