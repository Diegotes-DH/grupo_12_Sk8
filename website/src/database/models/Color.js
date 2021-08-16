module.exports = function (sequelize, dataTypes) {
    let alias = "Color";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: dataTypes.STRING,
        },
        value: dataTypes.STRING,
    }

    let config = {
        tableName:"colors",
        timeStamp: false
    }

    let Color = sequelize.define(alias, cols, config) 

    Color.associate = function (models){
        Color.belongsToMany(models.Product,{
            as: "productos",
            through: "ColorProduct",
            foreignKey: "idColor",
            otherKey: "idColor2",
            otherKey: "idProduct",
            timeStamp: false
        });
    };

    return Color
}