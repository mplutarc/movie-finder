import {Api} from "~/api"

export const state = () => ({
	searchQuery: ''
})

export const mutations = {
	setSearchQuery(state, data) {
		state.searchQuery = data
	}
}

let abortController = null

export const actions = {
	handleSearch({commit, state, rootState}, {dropPage}) {
		// eslint-disable-next-line no-async-promise-executor
		return new Promise(async (resolve, reject) =>{
			if(abortController){
				abortController.abort()
			}

			abortController = new AbortController()
			abortController.signal.addEventListener('abort', () => {
				reject(new Error('abort'))
			})

			if(dropPage){
				commit('paginator/setCurPage', 1, {root:true})
			}
			const genres = Object.keys(rootState.genres.genres).filter(key => rootState.genres.genres[key])

			const response = await Api.search(state.searchQuery, genres, rootState.paginator.curPage)

			commit('movies/setMovies', response.data, {root:true})
			commit('paginator/setTotalPages', response.totalPages, {root:true})

			return resolve()
		}
	)
	},

	async search({dispatch}, p){
		try {
			await dispatch('handleSearch', p)
		}
		catch (e) {
			if(e.message !== 'abort')
				throw new Error(e.message)
		}
	}
}
