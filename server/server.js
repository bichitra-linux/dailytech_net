import express from "express";
import mongoose from "mongoose";
import 'dotenv/config' ;

const server = express();
server.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.DB_LOCATION, {
    autoIndex: true
})

server.post("/signup", (req, res) => {
    res.json(req.body)
    console.log(req.body)
})

server.post("/signin", (req, res) => {
    res.json(req.body)
})

let PORT = "3000";

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})