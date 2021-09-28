module.exports = function (sequelize, dataTypes) {
    let alias = "CartProducts";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_user:{
            type: dataTypes.INTEGER,
        },
        id_product: {
            type: dataTypes.INTEGER,
        }
    }

    let config = {
        tableName:"carts_products",
        timestamps: false
    }

    let CartProducts = sequelize.define(alias, cols, config) 

    return CartProducts
}