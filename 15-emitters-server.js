const http = require('http')

// using event emitter API
const server = http.createServer()
//emits request event
// subscribe to it / listen for it / respond to it
server.on('request', (req, res) => {
    res.end('hello')
})

server.listen(8000)