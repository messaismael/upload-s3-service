import express from 'express';
import multer from 'multer';

import { UploadController } from '../controllers';
import { multerConfig } from '../config/multerConfig';

const router = express.Router();

const upload = multer(multerConfig);

router.post("/upload", upload.single('uploaded_file'), UploadController.Upload);

export { router };