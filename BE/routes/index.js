const products = require('../controllers/product.controller.js')
const orders = require('../controllers/order.controller.js')
const ads = require('../controllers/ad.controller.js')

module.exports = (app) => {


    app.get('/products', products.getProducts) //na stranku produktov

    app.post('/newOrder', orders.newOrder) //na objednanie

    app.get('/ad', ads.getAd) //na get reklamy

    app.put('/updateAdCounter', ads.updateCounter)

    app.put('/updateAd', ads.updateAd)

    app.get('/admin', orders.forAdmin)

    app.put('/updateOrder', orders.updateOrder)

}