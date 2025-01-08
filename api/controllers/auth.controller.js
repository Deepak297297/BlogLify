import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password || userName === "" || email === "" || password === "") {
        // return res.status(400).json({message: "All fields are required"});
        next(errorHandler(400, "All fields are required"));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const user = new User({
        userName,
        email,
        password: hashedPassword
    });

    try {
        await user.save();
        res.json("Signup successful");
        
    } catch (error) {
        // return res.status(500).json({message: error.message});
        next(error); 
        
    }
};