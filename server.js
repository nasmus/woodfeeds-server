import express from "express";
import cors from 'cors'
import imageupload from './imageUpload.js'
import path from 'path';
 

const app = express();
app.use(cors())
app.use('/images',express.static(path.join('uploads/images')));
app.use('/api/image',imageupload)

const port = 4000;
app.listen(port, ()=>{
    console.log(`server at http://localhost:${port}`);
})
