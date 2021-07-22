const multer = require("multer");
const path = require('path');

const dest = multer.diskStorage({
    destination: function (req, file, cb) {
        let extension = path.extname(file.originalname);
            cb(null, path.resolve(__dirname,"../../public/uploads","avatars"))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
const upload = multer({storage: dest});

module.exports = upload;

