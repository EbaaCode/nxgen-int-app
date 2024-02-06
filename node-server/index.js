require('dotenv').config()
const cors = require('cors')
const express = require('express')()
const http = require('http').createServer(express)
const { MongoClient } = require('mongodb')
const io = require('socket.io')(http, {
	cors: {
		origin: '*',
	},
})

let collection

// Establishing a connection to the MongoDB database.
const client = new MongoClient(process.env.MONGODB_URL)

// Handling the HTTP GET request.
express.use(cors()).get('/api/posts', async (_request, response) => {
	try {
		// Fetching all the posts from the database.
		let result = await collection.find().toArray()
		response.send(result)
	} catch (e) {
		response.status(500).send({ message: e.message })
	}
})

// Handling the socket.io WebSocket.
io.on('connection', (socket) => {
	console.log('A user connected.')
	socket.on('new-post', async (post) => {
		console.log('New post:', post)
		await collection.insertOne({
			body: post,
			timestamp: new Date(),
		})
		io.emit('new-post', post)
	})
})

// Responsible for starting the server and establishing a connection to the MongoDB database.
http.listen(process.env.PORT, async () => {
	try {
		await client.connect()
		collection = client.db('feed').collection('posts')
		console.log('Server is running on port: %s', http.address().port)
	} catch (e) {
		console.error(e)
	}
})
