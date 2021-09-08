<template>
	<div v-show="$store.state.movies.movies.length">
		<button :disabled="$store.state.paginator.curPage === 1" @click="click(-1)">Назад</button>
		<button :disabled="$store.state.paginator.curPage === $store.state.paginator.totalPages" @click="click(1)">
			Вперед
		</button>
	</div>
</template>

<script>
export default {
	name: "Paginator",
	methods: {
		click(delta) {
			this.$store.dispatch('paginator/changePage', delta)
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
