const product = require('../models/product');
const color = require('../models/color');
const brand = require('../models/brand');
const category = require("../models/category");
const productController = {
    index: (req,res)=> res.render("products/list",{list:product.allWithExtra()}),
    detail: (req,res)=> res.render("products/productDetail", {product:product.one(req.params.id)}),
    creation: (req,res)=> res.render("products/productCreate", {product:product.one(req.params.id),colors: color.all(), brands:brand.all(), category:category.all()}),
    edition: (req,res)=> res.render("products/productEdit", {product:product.one(req.params.id),colors: color.all(), brands:brand.all(), category:category.all()}),
    save: (req,res)=> {
        // return res.send(req.files)  
        let result = product.new(req.body, req.files);
        if(result == true){
            res.redirect("/producto")
        } else {
            res.send("Error al cagar la info")
        }
    },
    update: (req, res)=>{
        let result = product.update(req.body, req.files, req.params.id);
        if (result == true){
            res.redirect("/producto" )
        } else {
            res.send("Error al cagar la info")
        }
    }, 
    delete: (req,res) => {
        let result = product.delete(req.params.id);
        return result == true ? res.redirect("/producto") : res.send("Error al cargar la informacion") 
    },
    skates: (req,res) => {
        res.render("cats/skates",{list:product.allWithExtra()})
    }
}

module.exports = productController;
