<template>
	<div class="movieCard">
		<div class="basics">
			<img :src="movie.poster" alt="">

			<div>
				<h4>{{ movie.title }}</h4>
				<p v-show="genres">Genres: {{genres}}</p>
				<p>Release date: {{date}}</p>
			</div>
		</div>

		<div>{{ movie.overview }}</div>
	</div>
</template>

<script>
export default {
	name: "MovieCard",
	props: {
		movie: Object,
	},
	data(){
		return{
			genres: '',
			date: ''
		}
	},
	mounted() {
		this.genres = this.movie.genres?.join(", ")

		const tmpDate = new Date(this.movie.release_date)
		this.date = `${tmpDate.getDate()}/${tmpDate.getMonth()+1}/${tmpDate.getFullYear()} ${tmpDate.getHours()}:${tmpDate.getMinutes()}`
	}
}
</script>

<style scoped>

.movieCard {
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 6px;
	border: 1px solid #726e6e;
	border-radius: 5px;
	height: 100%;
	box-sizing: border-box;
}

.basics{
	display: flex;
}

h4{
	margin: 0;
}

img{
	height: 150px;
	width: 100px;
	margin-right: 10px;
}
</style>