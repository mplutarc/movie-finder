<template>
	<div class="wrapper">
		<input v-model="query" class="search" type="text">
		<div class="content">
			<Genres />
			<Movies />
		</div>
	</div>
</template>

<script>
import Genres from "~/components/genres"
import Movies from "~/components/movies"


export default {
	components: {Genres, Movies},
	data() {
		return {
			query: ''
		}
	},
	mounted() {
		this.$store.dispatch('search')
	},
	watch: {
		query() {
			this.$store.dispatch('changeQuery', this.query)
		}
	}
}
</script>
<style>
	.wrapper{
		display: flex;
		flex-direction: column;
		padding: 15px;
	}
	.search{
		width: 200px;
		height: min-content;
		margin-bottom: 15px;
	}
	.content{
		display: flex;
		justify-content: space-between;
	}
</style>
