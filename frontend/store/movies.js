export const state = () => ({
	movies: [],
})

export const mutations = {
	setMovies(state, data) {
		state.movies = data
	},
}