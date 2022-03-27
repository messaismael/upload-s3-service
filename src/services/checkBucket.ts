import { S3 } from "aws-sdk";

/**
 * @name checkBucket
 * @type {Function}
 * @param {S3} s3 
 * @description it checked if name bucket exist
 * @returns {Promise<{success:boolean; message: string; data: string;}>}
 * @author messaismael
*/

const checkBucket = async (s3: S3, bucket:string) => {
  try {
    const res =  await s3.headBucket({Bucket: bucket}).promise()
    console.log("Bucket already Exist", res.$response.data);
    return { success: true, message: "Bucket already Exist",data: {} };
  } catch (error) {
    console.log("Error bucket don't exsit", error);
    return { success: false, message: "Error bucket don't exsit",data: error };
  }
};

export default checkBucket;