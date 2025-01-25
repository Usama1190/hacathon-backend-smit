
import mongoose from "mongoose";

const beneficiarySchema = new mongoose.Schema({
    cnic: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Beneficiary = mongoose.model("Beneficiary", beneficiarySchema);

export default Beneficiary;










/*

import mongoose from 'mongoose';

const BeneficiarySchema = new mongoose.Schema({
    cnic: {
        type: String,
        required: true,
        unique: true,
        minlength: 13,
        maxlength: 13,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 15,
    },
    department: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Beneficiary = mongoose.model('Beneficiary', BeneficiarySchema);

export default Beneficiary;
*/