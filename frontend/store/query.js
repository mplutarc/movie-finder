import { debounce } from 'vue-debounce'

import {Api} from "~/api"

export const state = () => ({
	searchQuery: ''
})

export const mutations = {
	setSearchQuery(state, data) {
		state.searchQuery = data
	}
}

export const actions = {
	changeQuery(args, payload) {
		args.payload = payload;

		debounce(({commit, dispatch, payload}) => {
			commit('setSearchQuery', payload)
			commit('paginator/setCurPage', 1, {root:true})
			dispatch('search')
		}, 500)(args)
	},

	async search({commit, state, rootState}) {
		window.$nuxt.$root.$loading.start()

		const response = await Api.search(state.searchQuery, rootState.genres.selectedGenres, rootState.paginator.curPage)

		commit('movies/setMovies', response.data, {root:true})
		commit('paginator/setTotalPages', response.totalPages, {root:true})

		window.$nuxt.$root.$loading.finish()
	}
}
