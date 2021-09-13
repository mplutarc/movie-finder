module.exports = {
	purge: [
		'./components/**/*.{vue,js}',
		'./pages/**/*.vue',
		'./nuxt.config.{js,ts}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		boxShadow: {
			sm: '-1px 1px 0 3px #bfdbfe',
		}
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
