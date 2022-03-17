import { S3 } from "aws-sdk";

const checkBucketExist = async (s3: S3, bucket:string) => {
  try {
    const res =  await s3.headBucket({Bucket: bucket}).promise()
    console.log("Bucket already Exist", res.$response.data);
    return { success: true, message: "Bucket Created Successfull",data: {} };
  } catch (error) {
    console.log("Error bucket don't exsit", error);
    return { success: false, message: "Error bucket don't exsit",data: error };
  }
};

export default checkBucketExist;