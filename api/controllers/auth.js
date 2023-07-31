import Role from "../models/Role.js";
import User from "../models/User.js";

export const registerUser = async (req, res, next) => {
    const role = await Role.find({role: 'User'});
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        roles: role,
    });
    try {
        await newUser.save();
        return res.status(200).send("User successfully registered");
        
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
};

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find({});
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
};

export const updateUser = async (req, res, next) => {
    try {
        const user = await User.findById({_id: req.params.id});
        if(user) {
            const newData = await User.findByIdAndUpdate(
                req.params.id,
                {$set: req.body},
                {new: true}
            )
            return res.status(200).send("User successfully updated");
        } else {
            return res.status(404).send("User not found");
        }
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findById({_id: req.params.id});
        if(user) {
            await User.findByIdAndDelete(req.body.id);
            return res.status(200).send("User successfully deleted");
        } else {
            return res.status(404).send("User not found");
        }
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
};