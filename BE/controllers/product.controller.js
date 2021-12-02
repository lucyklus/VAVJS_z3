const Product = require("../models/").Product

module.exports = {

    getProducts(req, res){
        Product.findAll()
            .then(data => res.send(data))
            .catch(err => res.status(400).send(error))
    }
    
}

