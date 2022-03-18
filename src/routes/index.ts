import express from 'express';
import multer from 'multer';

import { UploadController } from '../controllers';
import { multerConfig } from '../config/multerConfig';

const router = express.Router();

const upload = multer({ storage: multerConfig.storage, fileFilter: multerConfig.fileFilter });

router.post("/upload", upload.single('filetos3'), UploadController.Upload);

export { router };