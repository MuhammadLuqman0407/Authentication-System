
import mongoose from "mongoose";
import config from "./config.js";

async function connectionDB(){
    await mongoose.connect(config.MONGO_URI)

    console.log(" Connected to the DB ")
}

export default connectionDB;