import { createServer } from 'node:http'

const server = createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello http world')
})

const host = 'localhost'
const port = 3000 // Add a port number

server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`)
})
