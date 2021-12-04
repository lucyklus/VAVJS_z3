const Order = require("../models/").Order
const Customer = require("../models/").Customer
const OrderProduct = require("../models/").OrderProduct
const Product = require("../models/").Product
const models = require("../models")

module.exports = {

    updateOrder(req, res){
        Order.update({state:true}, {where: {id: req.body.id}})
            .then(data => {
                if(data){res.status(200).send(data)}
                else{data.status(400).send(data)}
            })
            .catch(err => {res.status(500).send(data)})
    },

    async newOrder(req, res) {
        const transaction = await models.sequelize.transaction()

        try{
            const customer = await Customer.create({
                email: req.body.customer.email,
                name: req.body.customer.name,
                street: req.body.customer.street,
                number: req.body.customer.number,
                city: req.body.customer.city,
                postcode: req.body.customer.postcode
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

            await OrderProduct.bulkCreate( products, {transaction})

            await transaction.commit()
            res.status(201)
            return res.json(order.id)

        } catch (err) { 
            await transaction.rollback();
            if(err.name === "SequelizeUniqueConstraintError")
                res.status(403).send(err)
            else
                res.status(400).send(err)
        }
    },

    forAdmin(req, res){
        Order.findAll({
            include: [
                {model: Customer, as:"customer", attributes: {exclude: ['id']}},
                {model: OrderProduct, as:"products", attributes: ['productId', 'quantity'], include: [{ model: Product, as:"details", attributes: ['title', 'image', 'price']}]}
            ]
        })
        .then(data => {res.json(data)})
        .catch(err => {
            res.send(err)
        })
    }
}
