module.exports = function (sequelize, dataTypes) {
    let alias = "Cart";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_user:{
            type: dataTypes.INTEGER,
        }
    }

    let config = {
        tableName:"carts",
        timestamps: false
    }

    let Carts = sequelize.define(alias, cols, config) 

    return Carts
}