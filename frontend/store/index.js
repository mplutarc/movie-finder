import { debounce } from 'vue-debounce'

import {Api} from "~/api"

export const state = () => ({
	selectedGenres: [],
	allGenres: [],
	curPage: 1,
	totalPages: 1,
	pageData: [],
	searchQuery: ''
})

export const mutations = {
	setAllGenres(state, data) {
		state.allGenres = data
	},

	setSelectedGenres(state, data) {
		state.selectedGenres = data
	},

	setCurPage(state, data) {
		state.curPage = data
	},

	setTotalPages(state, data) {
		state.totalPages = data
	},

	setPageData(state, data) {
		state.pageData = data
	},

	setSearchQuery(state, data) {
		state.searchQuery = data
	},

}

export const actions = {
	async loadGenres({commit}) {
		const genres = await Api.genres()
		commit('setAllGenres', genres)
	},

	changePage({commit, dispatch, state}, payload) {
		commit('setCurPage', state.curPage + payload)
		dispatch('search')
	},

	changeSelectedGenres({commit, dispatch}, payload) {
		commit('setSelectedGenres', payload)
		commit('setCurPage', 1)
		dispatch('search')
	},

	changeQuery(args, payload) {
		args.payload = payload;

		debounce(({commit, dispatch, payload}) => {
			commit('setSearchQuery', payload)
			commit('setCurPage', 1)
			dispatch('search')
		}, 500)(args)
	},

	async search({commit, state}) {
		const response = await Api.search(state.searchQuery, state.selectedGenres, state.curPage)
		commit('setPageData', response.data)
		commit('setTotalPages', response.totalPages)
	}
}
