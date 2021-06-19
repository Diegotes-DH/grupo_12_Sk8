const controller = {
    home:(req,res) => res.render("index"),
    register: (req,res)=> res.render("users/register"),
    login: (req,res)=> res.render("users/login"),
    detail: (req,res)=> res.render("products/productDetail"),
    cart: (req,res)=> res.render("cart"),
    productCreation: (req,res)=> res.render("products/productCreate"),
    productEdition: (req,res)=> res.render("products/productEdit")
}
module.exports = controller;