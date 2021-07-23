const product = require('../models/product');
const color = require('../models/color');
const brand = require('../models/brand');
const category = require("../models/category");

const controller = {
    home:(req,res) => res.render("index",{list:product.allWithExtra()}),
    cart: (req,res)=> res.render("cart"),
    
}
module.exports = controller;