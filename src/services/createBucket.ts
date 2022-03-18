import { S3 } from 'aws-sdk';
import { CreateBucketRequest } from 'aws-sdk/clients/s3';
import config from "../config";

/**
 * @name createBucket
 *  @type {Function}
 * @param {S3} s3 
 * @description it created bucket
 * @returns {Promise<{success:boolean; message: string; data: string;}>}
 * @author messaismael
*/
const createBucket = async (s3: S3) => {
  const params: CreateBucketRequest = {
    Bucket: config.bucket_name,
    CreateBucketConfiguration: {
      // Set your region here
      LocationConstraint: "ap-south-1" // us-east-1
    }
  }

  try {
    const res = await s3.createBucket(params).promise();
    console.log("Bucket Created Successfull", res.Location);
    return {success: true, message: "Bucket Created Successfull",data: res.Location};
  } catch (error) {
    console.log("Error: Unable to create bucket \n", error);
    return {success: false, message: "Unable to create bucket", data: error};;
  }
}

export default createBucket;