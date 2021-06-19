const controller = {
    home:(req,res) => res.render("index"),
    register: (req,res)=> res.render("users/register"),
    login: (req,res)=> res.render("users/login"),
    detail: (req,res)=> res.render("products/productDetail"),
    cart: (req,res)=> res.render("cart")
}
module.exports = controller;