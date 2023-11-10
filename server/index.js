import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import CriminalRecord from './models/CriminalRecord.js';

const app = express()
app.use(express.json());



async function connectMongoDB() {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    if (conn) {
        console.log("Connected to MongoDB📦");
    }
}
connectMongoDB();

app.post("/criminalRecord", async (req, res) => {
    const {
        criminalID,
        address,
        firstName,
        lastName,
        city,
        state,
        aliasName,
        dob,
        age,
        gender
    } = req.body;

    try {
        const criminalRecord = new CriminalRecord({
            criminalID,
            address,
            firstName,
            lastName,
            city,
            state,
            aliasName,
            dob,
            age,
            gender
        });

        const savedCriminalRecord = await criminalRecord.save();

        res.json({
            success: true,
            data: savedCriminalRecord,
            message: "CriminalRecord saved successfully"
        });
    } catch (err) {
        res.json({
            success: false,
            message: err.message
        })
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`The server is Running on Port ${PORT} 🚀`);
});