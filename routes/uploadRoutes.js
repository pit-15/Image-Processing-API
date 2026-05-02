import express, { Router } from "express"
import upload from "../utils/multer.js"
import { uploadImage } from "../controllers/UploadImageController.js"

const router = express.Router();

router.post("/uploads",upload.single("image"),uploadImage);

export default router;