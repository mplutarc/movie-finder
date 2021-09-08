<template>
	<div class="wrapper">
		<input id="query" v-model="query" class="search" type="text">
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
	watch: {
		query() {
			this.$store.dispatch('query/changeQuery', this.query)
		}
	},
	mounted() {
		this.$nextTick(() => this.$store.dispatch('query/search'))
	},
}
</script>
<style>
body{
	background-color: rgba(255, 255, 229, 0.2);
}
	.wrapper{
		display: flex;
		flex-direction: column;
		padding: 15px;
	}
	.search{
		width: 230px;
		height: 20px;
		margin-bottom: 15px;
		box-shadow: -1px 1px 0 3px rgba(83, 172, 240, 0.2);
		border: none;
		border-radius: 5px;
		padding: 4px 6px;
	}
	.content{
		display: flex;
		justify-content: space-between;
	}
</style>
