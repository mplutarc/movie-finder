// Require the framework and instantiate it
const fastify = require('fastify')({logger: true})
const path = require('path')
const fs = require('fs/promises')

fastify.register(require('fastify-cors'), () => (req, cb) => {
	cb(null, {
		origin: true
	})
});

//movies filter
fastify.post('/search', async (request, response) => {
	const data = JSON.parse(await fs.readFile(path.resolve(__dirname, './movies.json')))
	const {query, genres, page} = request.body

	const hasQuery = (el, query) =>
		el.title.toLowerCase().includes(query.toLowerCase()) || el.overview.toLowerCase().includes(query.toLowerCase())

	const hasAllGenres = (el, genres) =>
		genres.every(genre => el.genres?.includes(genre))

	const filteredData = data.filter(el => {
		return genres ? hasAllGenres(el, genres) && hasQuery(el, query) : hasQuery(el, query)
	})

	return {
		data: filteredData.slice(20 * (page - 1), 20 * page),
		totalPages: Math.ceil(filteredData.length / 20)
	}
})

fastify.get('/genres', async (request, response) => {
	return JSON.parse(await fs.readFile(path.resolve(__dirname, './genres.json')))
})

// Run the server!
const start = async () => {
	try {
		await fastify.listen(8090)
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}
start()