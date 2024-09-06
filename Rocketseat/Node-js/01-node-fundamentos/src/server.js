import http from 'node:http'

const users = []

const server = http.createServer((request, response) => {
    const {method, url} = request

    if (method == 'GET' && url == '/users') {
        return response
        .writeHead(200)
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }

    if (method == 'POST' && url == '/users') {
        users.push({
            id: 1,
            name: 'Jon Doe',
            email: 'join.doe@exemple.com'})

        return response.writeHead(201).end("Criação de Usuário")

    }

    return response.writeHead(404).end()
})

server.listen(3333)


