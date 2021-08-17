// Imports (express, dotenv, mustache, path)
import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'

// Import Routes
import mainRoutes from './routes'

// Environment
dotenv.config()

// Express
const server = express()

// Template Engine (Mustache)
server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')))

// Routes
server.use(mainRoutes)

// Page 404
server.use((req, res) => {
  res.send('Page not found.')
})

// Listen Port
server.listen(process.env.PORT || 3333, () => {
  console.log(`🚀 Server started at port ${process.env.PORT}.`);
})