<template>
	<div>
		<div v-for="genre in this.$store.state.genres" :key="genre">
			<input id="genre" type="checkbox">
			<label :for="genre">{{ genre }}</label>
		</div>
	</div>
</template>

<script>
export default {
	name: "genres",
	data() {
		return {

		}
	},
	// methods: {
	// 	async getMovies(genre){
	// 		await fetch('http://127.0.0.1:8080/search', {
	// 			method: 'post',
	// 			body: {
	// 				"genres": [genre],
	// 				"page": 1
	// 			}
	// 		}).then(data => console.log(data))
	// 	}
	// },
	async fetch() {
		await this.$store.dispatch("loadGenres")
	}
}
</script>
