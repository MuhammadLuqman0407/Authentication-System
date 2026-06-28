
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import authRouter from '../routes/auth.route.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(morgan("dev"));
app.use(cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
}));
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRouter);


export default app;