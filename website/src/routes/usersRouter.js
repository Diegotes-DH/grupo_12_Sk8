const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require("multer");
const path = require('path');
const dest = multer.diskStorage({
    destination: function (req, file, cb) {
        let extension = path.extname(file.originalname);
            cb(null, path.resolve(__dirname,"../../public/uploads","avatars"))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})
const upload = multer({storage: dest})

/*login*/
router.get("/ingresa",usersController.login); 

/*register*/
router.get("/registro", usersController.register);

/*multer >> para subir archivos o imagenes*/
router.post("/registro", upload.single("fotoUsuario"), usersController.save);

/*procesar el registro >> router.post*/

/*perfil de usuario >> router.get*/


module.exports = router;