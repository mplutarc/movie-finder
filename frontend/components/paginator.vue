<template>
	<div v-show="$store.state.movies.movies.length">
		<button :disabled="$store.state.paginator.curPage === 1" @click="changePage(-1)">Назад</button>
		<button :disabled="$store.state.paginator.curPage === $store.state.paginator.totalPages" @click="changePage(1)">
			Вперед
		</button>
	</div>
</template>

<script>
export default {
	name: "Paginator",
	methods: {
		changePage(delta) {
			this.$store.dispatch('paginator/loadNewPage', delta)
		}
	}
}
</script>
<style scoped>
button {
	margin-top: 15px;
	height: 30px;
	background-color: #b3edff;
	border: none;
	border-radius: 5px;
	padding: 4px 6px;
}

button:hover {
	cursor: pointer;
	background-color: #58ccff;
}

button:disabled, button:disabled:hover {
	background-color: #d7d7d7;
}
</style>
