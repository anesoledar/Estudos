import http from 'node:http'

const server = http.createServer((request, response) => {
    return response.end("Seja bem vindo!!!")
})

server.listen(3333)