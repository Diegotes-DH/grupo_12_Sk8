module.exports = function (sequelize, dataTypes) {
    let alias = "Brand";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: dataTypes.STRING,
        }
    }

    let config = {
        tableName:"brands",
        timeStamp: false
    }

    let Brand = sequelize.define(alias, cols, config) 

    Brand.associate = function (models){
        Brand.hasMany(models.Product,{
            as: "products",
            foreignKey: "idBrand"
        });
    }

    return Brand
}