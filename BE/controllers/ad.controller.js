const Ad = require("../models/").Ad

module.exports = {

    createAd(req, res){
        Ad.create({
            link: req.body.link,
            image: req.body.image,
            counter: 0
        })
        .then(data => res.status(201))
        .catch(err => res.status(400).send(err))
    },

    getAd(req,res){
        Ad.findOne({order: [[ 'id', 'DESC' ]]})
          .then(data => res.send(data))
          .catch(err => res.status(400).send(err))
    },

    updateAd(req, res){
        var id
        var request = {
          link: req.body.link,
          image: req.body.image,
          counter:0  
        }

        var toUpdate = Object.fromEntries(Object.entries(request).filter(([_, v]) => v != null));

        Ad.findOne({order: [[ 'id', 'DESC' ]]}).then(data => id=data.id)

        Ad.update(toUpdate, {where: {id: id}})
          .then(num => {
              if(num){res.status(201)}
              else{res.status(400)}
          })
          .catch(err => {res.status(500)})
      },

      updateCounter(req, res) {
        var id, counter
        Ad.findOne({order: [[ 'id', 'DESC' ]]}).then(data => id=data.id, counter=data.counter)
        newCounter = counter++

        Ad.update({counter: newCounter}, {where: {id: id}})
        .then(num => {
            if(num){res.status(201)}
            else{res.status(400)}
        })
        .catch(err => {res.status(500)})

      }
}
