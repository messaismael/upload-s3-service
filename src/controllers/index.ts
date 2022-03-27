import initBucket from "../services";
import { S3 } from 'aws-sdk';

import config from "../config";
import { uploadToS3 } from "../services/uploadToS3";
import { Request } from "express";

export class UploadController {

  static Upload = async (req: Request, res: any) => {

    const s3 = new S3({
      accessKeyId: config.aws_access_key_id,
      secretAccessKey: config.aws_secret_access_key,
    });

    // Initialize bucket
    await initBucket(s3);

    console.log("file stobject", req.file)

    const uplaodRes = await uploadToS3(s3, req.file);

    if (uplaodRes.success) {
      res.status(200).json(uplaodRes);
    } else {
      res.status(400).json(uplaodRes);
    }
  }
}