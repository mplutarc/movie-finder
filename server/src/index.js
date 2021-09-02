// Require the framework and instantiate it
const fastify = require('fastify')({logger: true})
const path = require('path')
const fs = require('fs/promises')

//movies filter
fastify.post('/search', async (request, response) => {
	const data = JSON.parse(await fs.readFile(path.resolve(__dirname, './movies.json')))
	const {query, genres, page} = request.body

	return data.filter(el => {
		return genres ?
			el.genres?.includes(genres) && (el.title.includes(query) || el.overview.includes(query))
			:
			el.title.includes(query) || el.overview.includes(query)
	}).slice(20 * (page - 1), 20 * page)
})

fastify.get('/genres', async (request, response) => {
	return JSON.parse(await fs.readFile(path.resolve(__dirname, './genres.json')))
})

// Run the server!
const start = async () => {
	try {
		await fastify.listen(8080)
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}
start()