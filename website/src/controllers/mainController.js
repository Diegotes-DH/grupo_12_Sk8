const controller = {
    home:(req,res) => res.render("index"),
    cart: (req,res)=> res.render("cart"),
}
module.exports = controller;