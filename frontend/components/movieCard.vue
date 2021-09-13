<template>
	<div class="movieCard border-t-2 border-blue-200 rounded flex flex-col box-border bg-white border-0">
		<div class="p-1.5">
			<p class="text-xl font-medium">{{ movie.title }}</p>

			<p v-show="genres" class="tracking-wider font-extralight text-sm">Genres: {{ genres }}</p>
			<p class="tracking-wider font-extralight text-sm">Release date: {{ date }}</p>
		</div>

		<p class="bg-gradient-to-b from-white to-indigo-400 rounded p-1.5 mt-2 h-full font-light">
			<img :src="movie.poster" alt="" class="rounded bg-indigo-50">{{ movie.overview }}
		</p>
	</div>
</template>

<script>
export default {
	name: "MovieCard",
	props: ['movie'],
	data() {
		return {
			genres: '',
			date: ''
		}
	},
	mounted() {
		this.genres = this.movie.genres?.join(", ")

		const tmpDate = new Date(this.movie.release_date)
		this.date = `${tmpDate.getDate()}/${tmpDate.getMonth() + 1}/${tmpDate.getFullYear()} ${tmpDate.getHours()}:${tmpDate.getMinutes()}`
	}
}
</script>

<style scoped>

.movieCard {
	height: 100%;
}

p {
	margin: 0;
}

img {
	height: 210px;
	width: 140px;
	margin-right: 10px;
	float: left;
}
</style>