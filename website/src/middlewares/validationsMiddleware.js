const {body} = require("express-validator");

module.exports = [
    body("name").notEmpty().isLength({min: 2}).withMessage("Tenés que completar tu nombre con al menos 2 caracteres"),
    body("lastname").notEmpty().isLength({min: 2}).withMessage("Tenés que completar tu apellido con al menos 2 caracteres"),
    body("email").notEmpty().withMessage("Tenés que completar tu e-mail").bail()
    .isEmail().withMessage("Tiene que ser un formato válido de e-mail"),
    body("password").notEmpty().isLength({min: 8}).withMessage("Tenés que completar una contraseña con al menos 8 caracteres"),
    body('avatar').custom((value, {req })=>{
        let file = req.file;
        if (!file){
            throw new Error('Tenés que subir una imagen')
        }
        return true; 
    }) 
]  