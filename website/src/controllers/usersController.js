const { validationResult } =require('express-validator');
//const user = require('../models/user');
const bcryptjs = require('bcryptjs');

const db = require('../database/models');

const usersController = {
    register: (req,res)=>{
        return res.render("users/register")
    }, 

    save: function(req, res){
        const resultValidation = validationResult (req);
        if (resultValidation.errors.length > 0) {
            return res.render ("users/register", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }
        let userInDB = db.User.findOne({
            where: {email: req.body.email}
        }).then(function(){
            return userInDB
        });
        if (userInDB) {
            return res.render('users/register', {
                errors:{
                    email:{
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            });
        }
        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            image:req.file.filename
        }
        let userCreated = db.User.create(userToCreate,{
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            image: req.file.filename, 
        })
        .then(function (){
            res.redirect("/usuario/ingresa")
        }) 
    },

    login: function (req, res) {
        res.render("users/login")
    },

    loginProcess: function(req,res){
        let userToLogin = db.User.findOne({
            where:{email: req.body.email}
        }).then(function(){
            return userToLogin   
        });
        if(userToLogin){ 
            let validPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(validPassword){
                delete userToLogin.password;
                //creo la propiedad userLogged y le asigno el valor de userToLogin
                req.session.userLogged = userToLogin;

                if(req.body.remember_me){
                    res.cookie("userEmail", req.body.email, {maxAge: (1000*60)*2})
                }// con esto seteo la cookie

                return res.redirect('/usuario/perfil');
            } 
            else{res.render("users/login",{
                errors: {
                    password:{
                        msg:'credenciales inválidas'
                    }
                }
             })
            }
        }else{
            return res.render("users/login",{
                errors: {
                    email:{
                        msg:'e-mail inexistente'
                    }
                }
            })
        }
        
    },
    
    /*register: (req,res)=>{
        return res.render("users/register")
    }, 
    save: (req, res)=> {
        const resultValidation = validationResult (req);

        if (resultValidation.errors.length > 0) {
            return res.render ("users/register", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }

        let userInDB = user.findByField('email', req.body.email);
        if (userInDB) {
            return res.render('users/register', {
                errors:{
                    email:{
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            });
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            image:req.file.filename
        }

        let userCreated = user.create(userToCreate);

        return res.redirect("/usuario/ingresa"); 
    },  
    login: (req,res)=> res.render("users/login"),
    loginProcess: (req,res)=>{
        let userToLogin = user.findByField('email', req.body.email);

        if(userToLogin){ 
            let validPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(validPassword){
                delete userToLogin.password;
                //creo la propiedad userLogged y le asigno el valor de userToLogin
                req.session.userLogged = userToLogin;

                if(req.body.remember_me){
                    res.cookie("userEmail", req.body.email, {maxAge: (1000*60)*2})
                }// con esto seteo la cookie

                return res.redirect('/usuario/perfil');
            } 
            else{res.render("users/login",{
                errors: {
                    password:{
                        msg:'credenciales inválidas'
                    }
                }
             })
            }
        }
        else{
            return res.render("users/login",{
                errors: {
                    email:{
                        msg:'e-mail inexistente'
                    }
                }
            })
        }
        
    },
    profile: (req, res)=>{
        return res.render("users/profile",{
            user:req.session.userLogged
        });
    },  
    logout: (req, res)=>{
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
    */
    
}


module.exports = usersController;   

