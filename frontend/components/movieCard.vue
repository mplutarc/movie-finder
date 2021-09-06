<template>
	<div class="movieCard">
		<h3>{{ movie.title }}</h3>

		<p v-show="genres">Genres: {{ genres }}</p>
		<p>Release date: {{ date }}</p>

		<p class="overview"><img :src="movie.poster" alt="">{{ movie.overview }}</p>
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
	display: flex;
	flex-direction: column;
	gap: 5px;
	padding: 6px;
	border: none;
	border-radius: 5px;
	height: 100%;
	box-sizing: border-box;
	box-shadow: -2px 2px 0 3px rgba(83, 172, 240, 0.2);
	background-color: white;
}

h3, p {
	margin: 0;
}

.overview{
	margin-top: 10px;
}

img {
	height: 210px;
	width: 140px;
	margin-right: 10px;
	float: left;
	background-color: #d7d7d7;
}
</style>