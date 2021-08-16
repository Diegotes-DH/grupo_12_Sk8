module.exports = function (sequelize, dataTypes) {
    let alias = "ColorProduct";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idColor:{
            type: dataTypes.INTEGER,
        },
        idColor2:{
            type: dataTypes.INTEGER,
        },
        idProduct:{
            type: dataTypes.INTEGER,
        },
    }

    let config = {
        tableName:"colorProducts",
        timeStamp: false
    }

    let ColorProduct = sequelize.define(alias, cols, config) 


    return ColorProduct
}