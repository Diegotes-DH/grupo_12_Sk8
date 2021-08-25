/*
const product = require('../models/product');
const color = require('../models/color');
const brand = require('../models/brand');
const category = require("../models/category");
*/

const db = require("../database/models");

const productController = {
    index: function (req, res) {
        db.Product.findAll()
            .then(function (products){
                return res.render('products/list', {products: products})
            })
    }, 
    detail: function (req,res) {
        db.Product.findByPk(req.params.id, {
            include: [
                { association: 'brand'},
                { association: 'category'},
                { association: 'colors'}
            ]
        })
        .then(function(porduct){
            return res.render("products/productDetail", {product: porduct})
        })
    },
    creation: function (req, res) {
        let colors = db.Color.findAll();
        let brands = db.Brand.findAll();
        let categories = db.Category.findAll();
        Promise.all([colors, brands, categories])
        .then(function([colors, brands, categories]){
            return res.render("products/productCreate", {colors: colors, brands: brands, categories: categories})
        })

  
    },
    save: async (req, res) => {
        try{
            const product = await db.Product.create({
                name: req.body.productName,
                descript: req.body.productDescript,
                idCategory: req.body.productCat,
                idBrand: req.body.productBrand,
                image: req.file.filename, 
                price: req.body.productPrice,
            }) 
            
            const addColors = await product.setColors(Array.from(req.body.productColors))
            res.redirect("/producto")
        }catch (error){ 
            res.send(error)
         }
        
        
    },
    edition: function (req, res) {
        let product = db.Product.findByPk(req.params.id)
        let colors = db.Color.findAll();
        let brands = db.Brand.findAll();
        let categories = db.Category.findAll();
        Promise.all([product, colors, brands, categories])
            .then(function([ product, colors, brands, categories]){
            return res.render("products/productEdit", {product: product, colors: colors, brands: brands, categories: categories})
        })

    },
    update: function (req, res) {
        db.Product.update({
            name: req.body.productName,
            descript: req.body.productDescript,
            idCategory: req.body.productCat,
            idBrand: req.body.productBrand,
            image: req.file.filename, 
            price: req.body.productPrice,
        },
        {
            where: {id: req.params.id}
        })
        .then(function (){
            res.redirect("/producto")
        })
    },
    delete: function (req, res) {
        db.Product.destroy({
            where: {id: req.params.id}
        })
        .then(function (){
            res.redirect("/producto")
        })
    }

}

/*const productController = {
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
}*/

module.exports = productController;
