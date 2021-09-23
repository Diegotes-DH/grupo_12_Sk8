const DB = require ('../../database/models');
const Op = DB.Sequelize.Op;

module.exports = {
    list: (req,res) => {
        DB.Product.findAll().then(products => {
            return res.status(200).json({
                count: products.length,
                //countByCat:,
                data: products,
                status: 200
            })
        })
    },
    show:(req,res) => {
        DB.Product
        .findByPk(req.params.id)
        .then(product => {
            return res.status(200).json({
                data: product,
                status: 200
            })
        })
    }
}