<template>
	<div class="p-4 flex flex-col">
		<input v-model="query"
			   class="input bg-white h-9 w-1/3 mb-3.5 px-1.5 py-1 rounded
			   		focus:outline-none focus:ring-1 focus:ring-blue-200"
			   type="text"
			   placeholder="Type something"
			   @input="$store.dispatch('query/search', {dropPage: true})">
		<div class="content flex justify-between">
			<Genres/>
			<Movies/>
		</div>
	</div>
</template>

<script>
import Genres from "~/components/genres"
import Movies from "~/components/movies"


export default {
	components: {Genres, Movies},
	data() {
		return {}
	},
	async fetch() {
		await this.$store.dispatch('query/search', {})
	},
	computed: {
		query: {
			get() {
				return this.$store.state.query.searchQuery
			},
			set(v) {
				this.$store.commit('query/setSearchQuery', v)
			}
		}
	},
}
</script>

<style>
body {
	background-color: #eef2ff;
}

.input {
	margin-left: 20%;
	border-top: 2px solid #bfdbfe;
}
</style>
