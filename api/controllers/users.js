import User from "../models/User.js";

export const createUser = async (req, res, next) => {
    const newUser = new User(req.body);
    try {
        await newUser.save();
        return res.status(200).send("User successfully created");
        
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
}