// ॐ श्री गणेशाय नमः//

// import modules
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dirname, join } from 'path';
import { fileURLToPath } from "url";

// import files
import { mongoConnection } from "./database/mongo.js";

dotenv.config();
const index = express();

// 403 error page
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
index.get('/', function (req, res) {
    res.sendFile(join(__dirname + '/static/403.html'));
});

// dependencies use
index.use(cors());
index.use(express.json({ limit: '50mb' }));
index.use('/public', express.static('public'));



// database connection
await mongoConnection();

// server connection
index.listen(process.env.PORT || 3000, () => {
    console.log("");
    console.log("|||||||||||||||||||||||||||||||||||")
    console.log("||||| Server Connected: " + process.env.PORT + " ||||||");
    console.log("|||||||||||||||||||||||||||||||||||")
});
