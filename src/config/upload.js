const multer = require("multer");
const path = require("path");

// Configuraçãoes do multer para o armazenamento das imagens
module.exports = {
  storage: new multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    // cb: callBack
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  })
};
