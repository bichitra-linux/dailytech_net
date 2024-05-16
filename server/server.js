import express from "express";
import mongoose from "mongoose";
import 'dotenv/config' ;

const server = express();
server.use(express.json());

let PORT = "3000";

let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;    // regex for e-mail
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;   // regex for password


// Connect to MongoDB
mongoose.connect(process.env.DB_LOCATION, {
    autoIndex: true
})

// Check if the connection is successful 
server.post("/signup", (req, res) => {
    
    const { email, password, fullname } = req.body;

    if (fullname.length < 3 ){
        return res.status(403).json({error: "Full Name must be at least 3 characters long"})  
    }
    if (!email.length){
        return res.status(403).json({error: "Email is required"})
    }
    if (!emailRegex.test(email)){
        return res.status(403).json({error: "Invalid email"})
    }
    if (password.length < 8){
        return res.status(403).json({error: "Password must be at least 8 characters long"})
    }
    if (!passwordRegex.test(password)){
        return res.status(403).json({error: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"})
    }
    return res.status(200).json({"status": "ok"})

    

})

server.post("/signin", (req, res) => {
    const { email, password } = req.body;

    if (!email.length){
        return res.status(403).json({error: "Email is required"})
    }
    if (!emailRegex.test(email)){
        return res.status(403).json({error: "Invalid email"})
    }
    if (password.length < 8){
        return res.status(403).json({error: "Password must be at least 8 characters long"})
    }
    if (!passwordRegex.test(password)){
        return res.status(403).json({error: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"})
    }
    return res.status(200).json({"status": "ok"})
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})