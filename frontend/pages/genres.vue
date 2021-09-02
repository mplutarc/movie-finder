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
	async fetch() {
		await this.$store.dispatch("loadGenres")
	}
}
</script>
