const usersController = {
    register: (req,res)=> res.render("users/register"),
    login: (req,res)=> res.render("users/login"),
    save: (req, res)=> res.render("users/perfil"),
}

module.exports = usersController;  

