import dotenv from 'dotenv'

dotenv.config();
if(!process.env.MONGODB_URI){
    throw new Error(" Mongo DB environent variable is not set now");
}

if(!process.env.JWT_SECRET){
    throw new Error(" JWT SECRET is not set in environment Variable");
}
const config = {
    MONGO_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET
}

export default config;