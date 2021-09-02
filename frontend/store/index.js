export const state = () => ({
	genres: []
})

export const mutations = {
	setGenres(state, genres) {
		state.genres = genres
	}
}

export const actions = {
	async loadGenres({commit, state}) {
		try {
			const genres = await fetch('http://127.0.0.1:8080/genres').then(res =>
			  res.json()
			)
			commit('setGenres', genres)
			console.log(state.genres)
			return state.genres
		} catch (e) {
			return []
		}
	}
}
