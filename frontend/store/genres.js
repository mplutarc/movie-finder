import {Api} from "~/api";

export const state = () => ({
	genres: {},
})

export const mutations = {
	setGenres(state, data) {
		state.genres = data
	},
}

export const actions = {
	async loadGenres({commit}) {
		const genres = (await Api.getGenres()).reduce((acc, v) => {
			acc = {...acc, [v]: false}
			return acc
		}, {})
		commit('setGenres', genres)
	},

	changeSelectedGenres({commit, dispatch}, payload) {
		commit('setGenres', payload)
		dispatch('query/search', {dropPage: true}, {root:true})
	},
}
