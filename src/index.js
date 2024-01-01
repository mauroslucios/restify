const server = require('./server')
const PORT = 3010

server.listen(PORT, () => {
  console.log(`app running on url http://localhost:${PORT}`)
})
