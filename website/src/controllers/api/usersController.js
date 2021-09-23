const DB = require ('../../database/models');
const Op = DB.Sequelize.Op;

module.exports = {
    list: (req,res) => {
        DB.User
        .findAll()
        .then(users => {
            return res.status(200).json({
                count: users.length,
                //countByCat:,
                data: users,
                status: 200
            })
        })
    },
    show:(req,res) => {
        DB.User
        .findByPk(req.params.id)
        .then(user => {
            return res.status(200).json({
                data: user,
                status: 200
            })
        })
    }
}