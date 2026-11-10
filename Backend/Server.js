import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./Route/route.js";
import userRoute from "./Route/user.js";

const app = express();

// app.use(cors());
app.use(cors({
    origin : ["http://localhost:5173","https://full-stack-e-commere-application-liart.vercel.app/"]
}));
app.use(express.json());      // ya middleware very imp h.. jb postman/body se data bhejte h to ya use json ma parse krta h...
dotenv.config();

const PORT = process.env.PORT || 2000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
    
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.get('/', (req, res) => {
  res.send('<h1>Hello World!....This is the home route...Sachin</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});