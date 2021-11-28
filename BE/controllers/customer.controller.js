const Customer = require("../models/").Customer

module.exports = {

    createCustomer(req, res){
        Customer.create({
            email: req.body.email,
            name: req.body.name,
            street: req.body.street,
            number: req.body.number,
            city: req.body.city,
            postcode: req.body.postcode
        })
        .then(data => res.status(201).send(data))
        .catch(err => res.status(400).send(err))
    },

    getCustomerById(req,res){
        const id = req.params.id

        Customer.findByPk(id)
          .then(data => res.send(data))
          .catch(err => res.status(400).send(error))
    }
}