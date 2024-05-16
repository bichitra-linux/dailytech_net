import express from "express";
import mongoose from "mongoose";

const server = express();

// Connect to MongoDB
mongoose.connect()

let PORT = "3000";

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})