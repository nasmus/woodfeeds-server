import express from "express";
import path from "path";
import multer from "multer";

const imageUpload = express.Router()

//display image upload
const storage = multer.diskStorage({
    destination: "./uploads/images",
    filename: function (req, file, cb) {
      cb(
        null,
        file.originalname
      );
    },
  });
  
  
  //const upload = multer({ storage: storage });
  const multipleUpload = multer({ storage: storage })

imageUpload.post(
    '/upload',
    multipleUpload.array('multipleImage', 5),
    (async(req,res) => {
        const multipleImage = await req.files.map((file) => file.filename);
        res.send(multipleImage)
    }) 
)

export default imageUpload;