const Product = require("../models/").Product

module.exports = {

    getProducts(req, res){
        Product.findAll()
            .then(data => res.send(data))
            .catch(err => res.status(400).send(error))
    },

    getProductById(req,res){
        const id = req.params.id

        Product.findByPk(id)
          .then(data => res.send(data))
          .catch(err => res.status(400).send(error))
    }
}

/* 

exports.update = (req, res) => {
  const id = req.params.id

  Product.update(req.body, {
      where: {id: id}
  })
    .then(num => {
        if(num==1){
            res.send({
                message: 'Product was updated succcesfully'
            })
        }
        else{
            res.send({
                message: `Product with id=${id}' was not updated`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: 'Error updating product with id' + id
        })
    })
};

exports.delete = (req, res) => {
  const id = req.params.id

  Product.destroy({
      where: {id: id}
  })
    .then(num => {
        if(num==1){
            res.send({
                message: 'Product deleted'
            })
        }
        else{
           res.send({
               message: 'Cannot delete product with id' + id
            }) 
        }
    })
    .catch(err => {
        res.status(500).send({
            message: 'Error deleting product with id' + id
        })
    })
};

exports.deleteAll = (req, res) => {
  Product.destroy({
      where: {},
      truncate: false
  })
    .then(nums => {
        res.send({
            message: `${nums} was deleted `
        })
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occured during deleting all products'
        })
    })
};

*/
