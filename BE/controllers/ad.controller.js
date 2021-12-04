const Ad = require("../models/").Ad

module.exports = {

    getAd(req,res){
        Ad.findOne({ where: { id: 1 } })
        .then(data => res.send(data))
        .catch(err => res.status(400).send(err))
    },

    updateAd(req, res){
        var request = {
            link: req.body.link,
            image: req.body.image,
            counter:0  
        }

        var toUpdate = Object.fromEntries(Object.entries(request).filter(([_, v]) => v != null));

        Ad.update(toUpdate, {where: {id: 1}})
        .then(num => {
            if(num){res.status(200).send("1")}
            else{res.status(400).send("0")}
        })
        .catch(err => {res.status(500).send(err)})
    },

    updateCounter(req, res) {
        Ad.increment({counter: 1}, { where: { id: 1 } })
        .then(data => res.status(200).send("1"))
        .catch(err => res.status(400).send("0"))
    }
}
