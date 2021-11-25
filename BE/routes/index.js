const products = require('../controllers/product.controller.js')

module.exports = (app) => {

    app.post('/', products.create)

    app.get('/products', products.findAll)

}
