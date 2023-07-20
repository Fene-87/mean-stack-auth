import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

dotenv.config();

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to database")
    } catch (error) {
        throw error
    }
}

app.listen(8800, () => {
    connectMongoDB();
    console.log('Connected to backend')
})