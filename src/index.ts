import express from "express";
import cors from "cors";
import { router as Router } from "./routes"

import config from "./config";

const app = express();

const port = config.port;
const router = express.Router();

app.use(cors()); // Enable all cors requests for all routes

app.use(express.urlencoded({ limit: '50000mb', extended: false }));

// user route for all path
app.use(Router);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Upload S3 Service is ready'
  });
});


app.get("*", (req, res) => {
  res.status(404).send("Resource Not Found");
});

app.listen(port, () => {
  console.log(`Server is listening on port${port}\nYou can access via http://localhost:${port}/`);
});