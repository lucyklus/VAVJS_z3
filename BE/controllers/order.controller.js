const Order = require("../models/").Order
const Customer = require("../models/").Customer
const OrderProduct = require("../models/").OrderProduct
const models = require("../models")

module.exports = {

    getOrders(req,res){
        Order.findAll()
          .then(data => res.send(data))
          .catch(err => res.status(400).send(err))
    },

    updateOrder(req, res){
        Ad.update({state:true}, {where: {id: req.body.id}})
          .then(num => {
              if(num){res.status(201)}
              else{res.status(400)}
          })
          .catch(err => {res.status(500)})
    },

    async createTrans(req, res) {
        const transaction = await models.sequelize.transaction()

        try{
            const customer = await Customer.create({
                email: req.body.email,
                name: req.body.name,
                street: req.body.street,
                number: req.body.number,
                city: req.body.city,
                postcode: req.body.postcode
            }, {transaction})

            const order = await Order.create({
                customerId: customer.id,
                state: false
            }, {transaction})

            const products = req.body.products.map(item => ({
                orderId: order.id,
                productId: item.productId,
                quantity: item.quantity
            }))
            console.log("Here2")

            await OrderProduct.bulkCreate( products, {transaction})

            console.log("Trans succes")
            await transaction.commit()
            res.json()

        } catch (err) {
            console.log(err)
            await transaction.rollback()
        }
    }


}
