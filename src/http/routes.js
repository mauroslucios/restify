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

  server.post('/categoria', restifyAsyncWrap(async (req, res, next) => {
    const { name } = req.params
    try {
      res.send(await db.categories().save(name))
      next()
    } catch (error) {
      res.send(error)
      next()
    }
  }))
}

module.exports = routes
