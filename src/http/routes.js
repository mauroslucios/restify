const db = require('../services/mysql')
const restifyAsyncWrap = require('@gilbertco/restify-async-wrap')

const routes = (server) => {
  server.get('/categoria', restifyAsyncWrap(async (req, res, next) => {
    try {
      res.send(await db.categories().all())
      next()
    } catch (error) {
      res.send(error)
      next()
    }
  }))

  server.post('/categoria', (req, res, next) => {
    console.log(req)
    const { name } = req.params
    res.send(name)
    next()
  })
}

module.exports = routes
