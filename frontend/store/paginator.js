export const state = () => ({
	curPage: 1,
	totalPages: 1,
})

export const mutations = {
	setCurPage(state, data) {
		state.curPage = data
	},

	setTotalPages(state, data) {
		state.totalPages = data
	},
}

export const actions = {
	changePage({commit, dispatch, state}, payload) {
		commit('setCurPage', state.curPage + payload)
		dispatch('query/search', '', {root: true})
	},

}
