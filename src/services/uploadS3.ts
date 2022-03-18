import { S3 } from "aws-sdk";
import fs  from 'fs';
import config from "../config";

/**
 * @name uploadS3
 * @type {Function}
 * @param {S3} s3 
 * @param {File} fileData 
 * @description it's upload the current to the bucket
 * @returns {Promise<{success:boolean; message: string; data: object;}>}
 * @author messaismael
*/
export const uploadS3 = async (s3: S3, fileData?: Express.Multer.File) => {
  try {
    const fileContent = fs.readFileSync(fileData!.path);

    const params = {
      Bucket: config.bucket_name,
      Key: fileData!.originalname,
      Body: fileContent
    };

    try {
      const res = await s3.upload(params).promise();
      console.log("File Uploaded with Successfull", res.Location);
      return {success: true, message: "File Uploaded with Successfull", data: res.Location};
    } catch (error) {
      return {success: false, message: "Unable to Upload the file", data: error};
    }
  } catch (error) {
    return {success:false, message: "Unalbe to access this file", data: {}};
  }

}