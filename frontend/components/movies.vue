<template>
	<div class="moviesWrapper">
		<div class="grid gap-3.5 grid-cols-2">
			<div v-for="movie in $store.state.movies.movies" :key="movie.id">
				<MovieCard :movie="movie"/>
			</div>
		</div>
		<Paginator/>
	</div>
</template>

<script>
import Paginator from "~/components/paginator"
import MovieCard from "~/components/movieCard"

export default {
	name: "Movies",
	components: {Paginator, MovieCard}
}
</script>

<style scoped>
.moviesWrapper{
	width: 80%;
}

</style>

