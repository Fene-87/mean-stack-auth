import mongoose from "mongoose";

const RoleSchema = mongoose.Schema({
    role: {
        type: String,
        required: true,
    }
},
{
    timeStamp: true,
})