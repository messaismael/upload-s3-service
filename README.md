# Upload S3 Service

## Getting started

It's a service to upload file to a **AWS S3 Bucket** using **ExpressJs** and **TypeScript**.

You can upload image(jpeg, png and jpg) file to a specific bucket which name is given in **env** file just by providing file as data to the endpoint ( **http://localhost:8080/upload** ) of the project.

## Resources

[How to Implement an Uploading Service to S3 using NodeJS and TypeScript](https://messaismael.com/2022-03-29-how-to-Implement-an-uploading-service-to-s3-using-nodejs-and-typescript/)

## Tools

- **TypeScript**
- **Multer**
- **NodeJs**
- **AWS SDK**
- **ExpressJS**

## Install

    $ git clone https://github.com/messaismael/upload-s3-service.git
    $ cd upload-s3-service
    $ npm install

## Configs

About the configurations, you need to create an **env** file from the **envSample** file

## Run

To run this project you should use the following command:

    $ npm run start

To build for prod

    $ npm run build

##### Author

[Ismael Messa](https://github.com/messaismael)
