import multer from "multer";
import path from "path"
import fs from "fs"
import { error } from "console";

const uploadDir = path.join(process.cwd(), "uploads"); 
fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,uploadDir);
    },
    filename:function(req,file,cb)
    {
        cb(null,Date.now()+"_"+file.originalname);
    },
});

const allowedExtensions=[".jpeg",".jpg",".png",".webp"];

const filefilter = (req,file,cb)=>{
    const ext = path.extname(file.originalname).toLowerCase();

    const isValidext = allowedExtensions.includes(ext);

    const isValidmime = file.mimetype.startsWith("image/");

    if(isValidmime && isValidext){
        cb(null,true)
    }
    else
    {
        cb(new error("Only Valid image files are allowed"),false)
    }
}

const upload = multer({
    storage,
    filefilter,
    limits:{
        fileSize:15*1024*1024
    }
})
   
export default upload;