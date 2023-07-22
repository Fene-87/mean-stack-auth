import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import roleRoute from "./routes/role.js"

const app = express();

dotenv.config();

//middlewares
app.use(express.json());
app.use('/api/role', roleRoute)

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