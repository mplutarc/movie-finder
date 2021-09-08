<template>
	<v-overlay v-if="loading" :value="overlay">
		<v-progress-circular
			indeterminate
			:size="164"
			:color="color"
		></v-progress-circular>
	</v-overlay>
</template>

<script>
export default {
	data: () => ({
		loading: false,
		overlay: false,
		color: "#90CAF9"
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