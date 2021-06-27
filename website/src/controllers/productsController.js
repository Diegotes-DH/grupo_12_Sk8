const product = require('../models/product');
const color = require('../models/color');
const brand = require('../models/brand');

const productController = {
    index: (req,res)=> res.render("products/list"),
    detail: (req,res)=> res.render("products/productDetail"),
    creation: (req,res)=> res.render("products/productCreate"),
    edition: (req,res)=> res.render("products/productEdit"),
    save: (req,res)=> {
        // return res.send({form:req.body, files:req.files})
        let result = product.new(req.body, req.file);
        if(result == true){
            res.redirect("/")
        } else {
            res.send("Error al cagar la info")
        }
    },
}
module.exports = productController;
