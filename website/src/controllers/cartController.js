const db = require("../database/models");

cartController = {
    index: async (req, res) => {

        let products = await db.Product.findAll().catch(error => console.log(error));
        let cart = await db.CartProducts.findAll({
            where: {
                id_user: req.session.userLogged.id,
            }
        }).catch(error => console.log(error));

        let productsFind = new Array();

        for (let i = 0; i < products.length; i++) {
            for (let j = 0; j < cart.length; j++) {
                if (products[i].id == cart[j].id_product) {
                    productsFind.push(products[i]);
                }
            }
        }

        let lastPrice = 0;

        for (let i = 0; i < productsFind.length; i++) {
            lastPrice = lastPrice + productsFind[i].price;
        }

        console.log(productsFind);
        res.render("cart", {productsFind, lastPrice});

    },
    add: (req, res) => {
        idProduct = req.body.product_id;

        db.Product.findOne(
            {
                where: {
                    id: idProduct
                }
            }
        ).then(product => {
            console.log(req.session.userLogged.id);
            db.CartProducts.create(
                {
                    id_product: product.id,
                    id_user: req.session.userLogged.id,
                }
            )
            res.redirect("/");
        });
    },

    remove: async (req, res) => {
        let idProduct = req.body.id_product;
        console.log(idProduct)

        await db.CartProducts.destroy({
            where: {
                id_user: req.session.userLogged.id,
                id_product: idProduct,
            }
        })

        res.redirect("/carrito");
    },

    close: (req, res) => {
        res.send("Carrito cerrado!")
    }
}

module.exports = cartController;