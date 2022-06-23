const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");

//getting userRouter
const userRouter = require("./api/user");

//development env vars
require("dotenv").config();

//middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use("/api", userRouter);

//html
app.use(express.static(path.join(__dirname, "client")));

mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true },
    () => console.log("Successfully connected to database")
);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));