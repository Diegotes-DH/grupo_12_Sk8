const {body} = require("express-validator");

module.exports = [
    body("productName").notEmpty().withMessage("El campo de nombre tiene que estar completo").bail()
    .isLength({ min: 5}).withMessage("El campo de nombre tiene que tener al menos 5 caracteres"),
    body("productDescript").notEmpty().withMessage("El producto debe tener descripción.").bail()
    .isLength({ min: 10}).withMessage("La descripcion debe tener al menos 10 caracteres"),
    body("productBrand").notEmpty().withMessage("Debe seleccionar una marca"),
    body("productCat").notEmpty().withMessage("Debe seleccionar una categoria"),
    body("productColors").notEmpty().withMessage("Debe seleccionar un color"),
    body("productPrice").notEmpty().withMessage("El producto debe tener precio"),
    body('productImages').custom((value, {req })=>{
        let file = req.file;
        if (!file){
            throw new Error('Debe subir una imagen')
        }
        return true; 
    }) 
]
