import dotenv from 'dotenv'

dotenv.config();

if(!process.env.MONGODB_URI){
    throw new Error(" Mongo DB environent variable is not set now");
}

if(!process.env.JWT_SECRET){
    throw new Error(" JWT SECRET is not set in environment Variable");
}

if(!process.env.GOOGLE_CLIENT_ID){
    throw new Error("GOOGLE_CLIENT_ID is not defined in the environement variables");
}

if(!process.env.GOOGLE_CLIENT_SECRET){
    throw new Error("GOOGLE_CLIENT_SECRET is not defined in the enviornment variables");
}

if(!process.env.GOOGLE_REFRESH_TOKEN){
    throw new Error("GOOGLE_REFRESH_TOKEN is not defined in the environment variables");
}

if(!process.env.GOOGLE_USER){
    throw new Error("GOOGLE_USER is not defined in the environment variables");
}

const config = {
    MONGO_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_REFRESH_TOKEN: process.env.GOOGLE_REFRESH_TOKEN,
    GOOGLE_USER: process.env.GOOGLE_USER
}


export default config;