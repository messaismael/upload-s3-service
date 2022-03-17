import { Request } from "express";
import multer, { FileFilterCallback } from "multer";

// type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

export const multerConfig = {
  
  storage : multer.diskStorage({
    destination: 'uploads/',
    filename: function (req: Request, file: Express.Multer.File, cb: FileNameCallback) {
      cb(null, file.originalname);
    }
  }),

  fileFilter :(req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg") {
      console.log(file.originalname)
      return cb(null, false);
    }
    cb(null, true);
  }

}