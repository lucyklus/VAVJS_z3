const products = require('../controllers/product.controller.js')
const orders = require('../controllers/order.controller.js')
const ad = require('../controllers/ad.controller.js')

module.exports = (app) => {


    app.get('/products', products.getProducts) //na stranku produktov

    app.post('/newOrder', orders.createTrans) //na objednanie

    app.get('/ad', ads.getAd) //na get reklamy

}