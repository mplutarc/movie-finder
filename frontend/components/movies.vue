<template>
	<div class="moviesWrapper">
		<div class="moviesCards">
			<div v-for="movie in $store.state.pageData" :key="movie.id">
				<MovieCard :movie="movie"/>
			</div>
		</div>
		<Paginator/>
	</div>
</template>

<script>
import Paginator from "~/components/paginator"
import MovieCard from "~/components/MovieCard"

export default {
	name: "Movies",
	components: {Paginator, MovieCard}
}
</script>

<style scoped>
.moviesWrapper{
	width: 80%;
}

.moviesCards{
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 10px;
	grid-row-gap: 10px;
}

</style>

