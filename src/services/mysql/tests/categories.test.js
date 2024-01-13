const { connection, errorHandler } = require('./setup')
const test = require('ava')

const categoriestest = require('../categories')({ connection, errorHandler })

test('Criação de categoria', async t => {
  const result = await categoriestest.save('category-test')
  t.is(result.category.name, 'category-test')
})
