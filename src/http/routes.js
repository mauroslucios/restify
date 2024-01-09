const db = require('../services/mysql')
const restifyAsyncWrap = require('@gilbertco/restify-async-wrap')

const routes = (server) => {
  server.get('/categoria', restifyAsyncWrap(async (req, res, next) => {
    try {
      res.send(await db.categories().all())
    } catch (error) {
      res.send(error)
    }
    next()
  }))

  server.post('/categoria', restifyAsyncWrap(async (req, res, next) => {
    const { name } = req.params
    try {
      res.send(await db.categories().save(name))
    } catch (error) {
      res.send(error)
    }
    next()
  }))

  server.put('/categoria', restifyAsyncWrap(async (req, res, next) => {
    const { id, name } = req.params
    try {
      res.send(await db.categories().update(id, name))
    } catch (error) {
      res.send(error)
    }
    next()
  }))

  server.del('/categoria', restifyAsyncWrap(async (req, res, next) => {
    const { id } = req.params
    try {
      res.send(await db.categories().del(id))
    } catch (error) {
      res.send(error)
    }
    next()
  }))
}
module.exports = routes
