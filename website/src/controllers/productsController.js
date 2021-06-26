const productController = {
    detail: (req,res)=> res.render("products/productDetail"),
    creation: (req,res)=> res.render("products/productCreate"),
    edition: (req,res)=> res.render("products/productEdit")
}
module.exports = productController;
