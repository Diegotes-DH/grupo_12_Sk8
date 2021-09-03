const {check} = require("express-validator");

let productValidationMiddleware =[
    check("productName").notEmpty().withMessage("El campo de nombre tiene que estar completo").bail()
    .isLength({ min: 5}).withMessage("El campo de nombre tiene que tener al menos 5 caracteres"),
    check("productDescript").notEmpty().withMessage("El producto debe tener descripcion.").bail()
    .isLength({ min: 20}).withMessage("La descripcion debe tener al menos 20 caracteres"),
    check("productBrand").notEmpty().withMessage("Debe seleccionar una marca"),
    check("productCat").notEmpty().withMessage("Debe seleccionar una categoria"),
    check("productColors").notEmpty().withMessage("Debe seleccionar un color"),
    check("productPrice").notEmpty().withMessage("El producto debe tener precio"),
    check('productImages').custom((value, {req })=>{
        let file = req.file;
        if (!file){
            throw new Error('Tenés que subir una imagen')
        }
        return true; 
    }) 
]
module.exports = productValidationMiddleware;