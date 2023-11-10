import { Schema, model } from "mongoose";

const CriminalRecordSchema = new Schema({
    criminalID: {
        type: Number,
        required: true,
    },
     address: {
        type: String,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
   state: {
        type: String,
        required: true,
    },
    aliasName: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
    },
    age: {
        type: Number,
        required: true,
    }, 
    gender: {
        type: String,
        required: true,
    }
}, {
    timestamps: true 
});

const CriminalRecord = model("criminalRecord", CriminalRecordSchema);

export default CriminalRecord;
