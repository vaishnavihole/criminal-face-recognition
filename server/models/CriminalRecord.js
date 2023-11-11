import { Schema, model } from "mongoose";

const CriminalRecordSchema = new Schema({
    criminalID: {
        type: Number,
    },
     address: {
        type: String,
    },
    Name: {
        type: String,
    },
    city: {
        type: String,
    },
   state: {
        type: String,
    },
    aliasName: {
        type: String,
    },
    dob: {
        type: String,
    },
    age: {
        type: Number,
    }, 
    gender: {
        type: String,
    }
}, {
    timestamps: true 
});

const CriminalRecord = model("CriminalRecord", CriminalRecordSchema);

export default CriminalRecord;
