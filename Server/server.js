const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// const nodemailer = require("nodemailer");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");


const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.PORT || 4000

app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials:true}))

app.get('/', (req, res)=> res.send(" Home Route work correctly"))


app.listen(port, () => console.log(` Server stated on the PORT :${port}`))