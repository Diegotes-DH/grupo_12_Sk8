module.exports = function (sequelize, dataTypes) {
    let alias = "Product";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: dataTypes.STRING,
        },
        descript:{
            type: dataTypes.STRING,
        },
        idCategory:{
            type: dataTypes.INTEGER,
        },
        idBrand:{
            type: dataTypes.INTEGER,
        },
        image:{
            type: dataTypes.STRING,
        },
        price:{
            type: dataTypes.INTEGER,
        },
    }

    let config = {
        tableName:"products",
        timestamps: false
    }

    let Product = sequelize.define(alias, cols, config)
    
    Product.associate = function (models){

        Product.belongsTo(models.Brand,{
            as: "brand",
            foreignKey: "idBrand",
        });

        Product.belongsTo(models.Category,{
            as: "category",
            foreignKey: "idCategory",
        });

        Product.belongsToMany(models.Color,{
            as: "colors",
            through: "colorsProducts",
            foreignKey: "idProduct",
            otherKey: "idColor",
            timestamps: false
        });
         
    }; 
 
    return Product
}