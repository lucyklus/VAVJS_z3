const OrderProduct = require("../models/").OrderProduct

module.exports = {

    createOrderProduct(req, res){

        orderProduct.create({
            orderId: req.body.orderId,
            productId: req.body.productId,
            quantity: req.body.quantity
        })
        .then(data => res.status(201))
        .catch(err => res.status(400).send(err))
    },

    getOrderProduct(req,res){
        const orderId = req.body.orderId

        orderProduct.findAll({ where: {orderId: orderId} })
          .then(data => res.send(data))
          .catch(err => res.status(400).send(err))
    }
}
