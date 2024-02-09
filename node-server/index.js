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
		try {
			console.log('New post:', post.body)
			await collection.insertOne(post)
			io.emit('new-post', post)
		} catch (e) {
			console.error('Error inserting post:', e)
		}
	})
})

// Responsible for starting the server and establishing a connection to the MongoDB database.
const startServer = async () => {
	try {
		await client.connect()
		collection = client.db('feed').collection('posts')
		http.listen(process.env.PORT, () => {
			console.log('Server is running on port: %s', http.address().port)
		})
	} catch (e) {
		console.error('Failed to connect to the database:', e)
	}
}
startServer()
