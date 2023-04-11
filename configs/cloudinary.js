const cloudinary = require('cloudinary').v2;
const multer = require('multer');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
  });
 
const storage = multer.diskStorage({
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/jpg') {
        return cb(new Error('Only image files are allowed!'))
      }
      cb(null, true)
    }
  })

const uploadfile={
    upload:upload
}

module.exports.uploadFile=uploadfile


  