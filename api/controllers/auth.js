import Role from "../models/Role.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createSuccess } from "../utils/success.js";
import { createError } from "../utils/error.js";

export const registerUser = async (req, res, next) => {
    const role = await Role.find({role: 'User'});
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        password: hashPassword,
        roles: role,
    });
    try {
        await newUser.save();
        return next(createSuccess(200, "User successfully registered!"));
        
    } catch (error) {
        return next(createError(500, "Internal Server Error!"));
    }
};

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user) {
            return next(createError(404, "User not found!"));
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect) {
            return next(createError(400, "Incorrect Password"));
        }
        return next(createSuccess(200, "Login Successful!"));
    } catch (error) {
        return next(createError(500, "Internal Server Error!"));
    }
}

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find({});
        return next(createSuccess(200, "success", users));
    } catch (error) {
        return next(createError(500, "Internal Server Error!"));
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
            return next(createSuccess(200, "User successfully updated!"));
        } else {
            return next(createError(404, "User not found!"));
        }
    } catch (error) {
        return next(createError(500, "Internal Server Error!"));
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findById({_id: req.params.id});
        if(user) {
            await User.findByIdAndDelete(req.body.id);
            return next(createSuccess(200, "User successfully deleted!"));
        } else {
            return next(createError(404, "User not found!"));
        }
    } catch (error) {
        return next(createError(500, "Internal Server Error!"));
    }
};
