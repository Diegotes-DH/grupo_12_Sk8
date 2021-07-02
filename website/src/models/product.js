const path = require('path');
const fs = require('fs');
const colorModel = require('./color.js');
const brandModel = require('./brand.js');
const categoryModel = require("./category.js")
const model = {
    all: function() {
        const directory = path.resolve(__dirname,"../data","products.json")
        const file = fs.readFileSync(directory,"utf-8")
        const convert = JSON.parse(file)
        return convert
    },
    allWithExtra: function () {
        let productos = this.all();
        productos.map(element => {
            element.brand = brandModel.one(element.brand)
            return element
        }).map(element => {
            element.colors = element.colors.map(color => {
                color = colorModel.one(color)
                return color
            })
            return element
        }).map(element => {
            element.category = categoryModel.one(element.category)
            return element
        })
        return productos;
    },
    new: function (data,files){
        const directory = path.resolve(__dirname, "../data", "products.json");
        let productos = this.all();
        let nuevo = {
            id: productos.length > 0 ? productos[productos.length -1].id+1:1,
            name: data.productName,
            descript: data.productDescript,
            brand: parseInt(data.productBrand),
            image: files.map(image => image.filename),
            category: parseInt(data.productCat),
            colors: data.productColors.map(color => parseInt(color)),
            price: data.productPrice
        }
        productos.push(nuevo);
        fs.writeFileSync(directory,JSON.stringify(productos,null,2));
        return true;
    },
    update: function (data, files, id) {
        const directory = path.resolve(__dirname, "../data", "products.json");
        let productos = this.all();
        productos.map(producto => {
            if(producto.id == id){
                producto.name = data.productName,
                producto.descript = data.productDescript,
                producto.brand = parseInt(data.productBrand),
                producto.image = files.map(image => image.filename),
                producto.category = parseInt(data.productCat),
                producto.colors = data.productColors.map(color => parseInt(color)),
                producto.price = data.productPrice
                return producto
            }
            return producto
        })
        fs.writeFileSync(directory,JSON.stringify(productos,null,2));
        return true;
    },
    one: function(id){
    let productos = this.allWithExtra();
    let resultado = productos.find(producto => producto.id == id)
    return resultado
    },
    delete: function(id) {
        const directory = path.resolve(__dirname,"../data","products.json")
        let productos = this.all();
        let deleted = this.one(id);
        // eliminamos la imagen de la carpeta upload
        deleted.image.forEach(image => {
            fs.unlinkSync(path.resolve(__dirname,"../../public/uploads/products",image))
        });
        // filtarmos el producto que deaseamos eliminar
        productos = productos.filter(producto => producto.id != deleted.id )
        fs.writeFileSync(directory,JSON.stringify(productos,null,2));
        return true;
    }
}

module.exports = model;