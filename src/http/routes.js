const db = require('../services/mysql')

const routes = (server) => {
  server.get('/categoria', (req, res, next) => {
    db.categories().all().then(categories => {
      res.send(categories)
      next()
    }).catch(error => {
      res.send(error)
      next()
    })
  })

  server.post('/categoria', (req, res, next) => {
    console.log(req)
    const { name } = req.params
    res.send(name)
    next()
  })
}

module.exports = routes
