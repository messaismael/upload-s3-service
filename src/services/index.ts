import { S3, AWSError } from 'aws-sdk';
import checkBucketExist from './checkbucketExist';
import createBucket from './createBucket';

import config from "../config";

const initBucket = async (s3: S3) => {
  const bucketStatus = await checkBucketExist(s3, config.bucket_name);

  if( !bucketStatus.success ) {
    let bucket = await createBucket(s3);
    console.log(bucket.message);
  }
}

export default initBucket;
