<template>
	<div class="ml-10">
		<p class="mb-2">Genres:</p>
		<div v-for="(val, genre) in $store.state.genres.genres" :key="genre" class="flex items-center mr-4 mb-2">
			<input type="checkbox" class="opacity-0 absolute h-8 w-8"
				   :value="val" @change="onChange(genre)">

			<CustomCheckbox/>

			<p class=" font-light">{{ genre }}</p>
		</div>
	</div>
</template>

<script>
import CustomCheckbox from '~/components/customCheckbox'

export default {
	name: "Genres",
	components: {CustomCheckbox},
	async fetch() {
		await this.$store.dispatch("genres/loadGenres")
	},
	methods: {
		onChange(genre) {
			const genres = {...this.$store.state.genres.genres, [genre]: !this.$store.state.genres.genres[genre]}
			this.$store.dispatch('genres/changeSelectedGenres', genres)
		}
	}
}
</script>

<style scoped>
.checkbox {
	max-width: 24px;
	min-width: 24px;
	height: 24px;
}

input:checked + div {
	@apply border-blue-500;
}

input:checked + div svg {
	@apply block;
}
</style>
