<template>
	<div class="genresWrapper">
		<div v-for="genre in $store.state.allGenres" :key="genre">
			<input id="genre" type="checkbox" @change="onChange($event, genre)">
			<label :for="genre">{{ genre }}</label>
		</div>
	</div>
</template>

<script>
export default {
	name: "Genres",
	async mounted() {
		await this.$store.dispatch("loadGenres")
	},
	methods: {
		onChange(event, genre) {
			const genres = [...this.$store.state.selectedGenres]
			if (event.target.checked) {
				genres.push(genre)
			} else {
				const index = genres.indexOf(genre)
				genres.splice(index, 1)
			}
			this.$store.dispatch('changeSelectedGenres', genres)
		}
	}
}
</script>
