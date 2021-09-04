<template>
	<div v-show="$store.state.pageData.length">
		<button :disabled="$store.state.curPage === 1" @click="click(-1)">Назад</button>
		<button :disabled="$store.state.curPage === $store.state.totalPages" @click="click(1)">Вперед</button>
	</div>
</template>

<script>
export default {
	name: "Paginator",
	methods: {
		click(delta) {
			this.$store.dispatch('changePage', delta)
		}
	}
}
</script>

