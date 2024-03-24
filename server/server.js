import http from 'http'

const server = http.createServer((req, res) => {
  let requestBody = ''

  req.on('data', (chunk) => {
    requestBody += chunk;
  });

  req.on('end', () => {
    res.writeHead(200, { 'Content-Type': 'application/json' })

    const response = {
      headers: req.headers,
      body: {
        username: 'LISKA',
        password: 'Not secure'
      },
    }

    res.end(JSON.stringify(response))
  })
})

const PORT = 3000
const HOST = 'localhost'

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`)
})
