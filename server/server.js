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
    
    const { email, password, fullname } = req.body;

    if (fullname.length < 3 ){
        return res.status(403).json({error: "Fullname must be at least 3 characters long"})  
    }
    if (!email.length){
        return res.status(403).json({error: "Email is required"})
    }
    if (password.length < 8){
        return res.status(403).json({error: "Password must be at least 8 characters long"})
    }
    return res.status(200).json({"status": "ok"})

    

})

server.post("/signin", (req, res) => {
    res.json(req.body)
})

let PORT = "3000";

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})