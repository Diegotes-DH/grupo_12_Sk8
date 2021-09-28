const DB = require ('../../database/models');
const Op = DB.Sequelize.Op;

module.exports = {
    list: async (req,res) => {
        try{
            const users = await DB.User.findAll({attributes:["id","name","lastname","email"]})
            users.forEach(user => {
                user.dataValues.detail = 'http://localhost:3030/api/users/'+user.id
            })
            res.status(200).json({count: users.length ,data: users})
        }catch(error){
            throw error
        }
    },
    show: async (req,res) => {
        try{
        const user = await DB.User.findByPk(req.params.id, {attributes:["id","name","lastname","email", 'image']})
        user.image = 'http://localhost:3030/uploads/avatars/'+ user.image;
        res.status(200).json({data: user})
        }catch(error){
            throw error;
        }
    }
}