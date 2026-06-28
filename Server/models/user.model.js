import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "username is required"],
        unique: [true, "username must be unique"]
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email must be unique"]
    },
    password:{
        type: String,
        required: [true, "Password is required"],
    },
    verified:{
        type: Boolean,
        default: false
    }
})

const userModel = mongoose.model("users", userSchema);
export default userModel;