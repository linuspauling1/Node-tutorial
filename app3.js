const http = require('http')
const server = http.createServer((request,response) => {
    console.log('Server exists!')
    response.end('Welcome!')
})
server.listen(5000)
setInterval(() => {
    console.log('After server!')
}, 1000);