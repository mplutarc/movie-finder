<template>
	<v-overlay v-if="loading" :value="overlay">
		<v-progress-circular
			indeterminate
			size="64"
			color="primary"
		></v-progress-circular>
	</v-overlay>
</template>

<script>
export default {
	data: () => ({
		loading: false,
		overlay: false,
	}),
	methods: {
		start() {
			this.loading = true
			this.overlay = true
		},
		finish() {
			this.loading = false
			this.overlay = false
		},
		fail(error) {
			console.log(error)
		},
	},
}
</script>