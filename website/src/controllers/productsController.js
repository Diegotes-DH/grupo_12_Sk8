const product = require('../models/product');
const color = require('../models/color');
const brand = require('../models/brand');

const productController = {
    index: (req,res)=> res.render("products/list"),
    detail: (req,res)=> res.render("products/productDetail"),
    creation: (req,res)=> res.render("products/productCreate"),
    edition: (req,res)=> res.render("products/productEdit", {product:product.one(req.params.id),colors: color.all(),brands:brand.all()}),
    save: (req,res)=> {
        // return res.send(req.files)
        let result = product.new(req.body, req.files);
        if(result == true){
            res.redirect("/")
        } else {
            res.send("Error al cagar la info")
        }
    },
    update: (req, res)=>{
        let result = product.update(req.body, req.files, req.params.id);
        if (result == true){
            res.redirect("/" )
        } else {
            res.send("Error al cagar la info")
        }
    },
    delete: (req,res) => {
        let result = product.delete(req.params.id);
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion") 
    }
}

module.exports = productController;
