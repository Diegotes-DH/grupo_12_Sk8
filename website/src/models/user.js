// Editar info de usuario
 
const fs = require('fs');

const user = {
    fileName: './src/data/users.json',

    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    generateId: function(){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser){
            return lastUser.id + 1;
        }
        else {return 1}
    },

    findAll: function(){
        return this.getData();
    },

    // Buscar al usuario que se quiere loguear por id
    findByPk: function(id){
        let allUsers = this.findAll();
        let userFounds = allUsers.find(oneUser => oneUser.id === id);
        return userFounds;
    },

    // Buscar al usuario que se quiere loguear por email
    findByField: function(field, text){
        let allUsers = this.findAll();
        let userFounds = allUsers.find(oneUser => oneUser[field] === text);
        return userFounds;
    },

    // Guardar al usuario en la DB
    create: function(userData){
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        };
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName,JSON.stringify(allUsers, null, " "));
        return newUser;
    },

    // Eliminar un usuario de la DB
    delete: function(id){
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName,JSON.stringify(finalUsers, null, " "));
        return true;
    }
}
module.exports = user;  