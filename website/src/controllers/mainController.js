const db = require("../database/models");

const controller = {
    home: function (req, res) {
        db.Product.findAll()
            .then(function (products){
                return res.render('index', {products: products})
            })
    },
    cart: (req,res)=> res.render("cart"),
    
}
module.exports = controller;