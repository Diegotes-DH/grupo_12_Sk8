const path = require('path');
const fs = require('fs');
const model = {
    all: function() {
        const directory = path.resolve(__dirname,"../data","colors.json")
        const file = fs.readFileSync(directory,"utf-8")
        const convert = JSON.parse(file)
        return convert
    },
    one: function (id) {
        let productos = this.all();
        let resultado = productos.find(producto => producto.id == id)
        return resultado;
    }
};
module.exports = model;