import {Api} from "~/api";

export const state = () => ({
	selectedGenres: [],
	allGenres: [],
})

export const mutations = {
	setAllGenres(state, data) {
		state.allGenres = data
	},

	setSelectedGenres(state, data) {
		state.selectedGenres = data
	},
}

export const actions = {
	async loadGenres({commit}) {
		const genres = await Api.getGenres()
		commit('setAllGenres', genres)
	},

	changeSelectedGenres({commit, dispatch}, payload) {
		commit('setSelectedGenres', payload)
		commit('paginator/setCurPage', 1, {root:true})
		dispatch('query/search', '', {root:true})
	},
}
