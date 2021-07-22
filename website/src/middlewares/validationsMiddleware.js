const {body} = require("express-validator");

module.exports = [
    body("name").notEmpty().withMessage("Tenés que completar tu nombre"),
    body("lastname").notEmpty().withMessage("Tenés que completar tu apellido"),
    body("email").notEmpty().withMessage("Tenés que completar tu e-mail").bail()
    .isEmail().withMessage("Tiene que ser un formato válido de e-mail"),
    body("password").notEmpty().withMessage("Tenés que completar una contraseña"),
    body('avatar').custom((value, {req })=>{
        let file = req.file;
        if (!file){
            throw new Error('Tenés que subir una imagen')
        }
        return true; 
    })
]