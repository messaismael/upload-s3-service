import { S3 } from 'aws-sdk';
import checkBucket from './checkBucket';
import createBucket from './createBucket';

import config from "../config";

/**
 * @name initBucket
 * @type {Function}
 * @description the function initailize a bucket: create if it's don't exist
 * @returns {void}
 * @author messaismael
*/
const initBucket = async (s3: S3) => {
  const bucketStatus = await checkBucket(s3, config.bucket_name);

  if( !bucketStatus.success ) { // check if the bucket don't exist
    let bucket = await createBucket(s3); // create new bucket
    console.log(bucket.message);
  }
}

export default initBucket;
