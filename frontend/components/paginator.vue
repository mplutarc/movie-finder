<template>
	<div v-show="$store.state.movies.movies.length">
		<button class="button mr-2" :disabled="$store.state.paginator.curPage === 1" @click="changePage(-1)">Назад</button>
		<button class="button" :disabled="$store.state.paginator.curPage === $store.state.paginator.totalPages" @click="changePage(1)">
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
.button {
	@apply rounded bg-white mt-4 h-8 py-1 px-1.5 font-light text-lg leading-4;

	border-top: 2px solid #bfdbfe;
}

.button:hover {
	cursor: pointer;
	background-color: #bfdbfe;
}

.button:disabled, button:disabled:hover {
	background-color: rgba(215, 215, 215, 0.8);
	border-top: 2px solid #b9b9b9;
	cursor: default;
	color: #b2b2b2;
}
</style>
