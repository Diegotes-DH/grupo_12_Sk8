const controller = {
    home:(req,res) => res.render("index"),
    register: (req,res)=> res.render("register"),
    login: (req,res)=> res.render("login"),
    detail: (req,res)=> res.render("productDetail"),
    cart: (req,res)=> res.render("cart")
}
module.exports = controller;