import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

// Middle
import notFound from "./middleware/not-found.js";

import auth from "./routes/auth.js";
import insurance from "./routes/insurance.js";
import requireSignIn from "./middleware/authentication.js";
import * as http from "http";
import isAdmin from "./middleware/isAdmin.js";

const app = express();

const server = http.createServer(app);

if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev"));
}

app.use(express.json({limit: "5mb"}));
app.use(express.urlencoded({extended: true}));
app.use(
    cors({
        // @ts-ignore
        origin: "*",
    })
);

app.use("/api/insurance", requireSignIn, isAdmin, insurance);
app.use("/api/auth", auth);

// @ts-ignore
app.use("/", (req, res) => {
    res.send("Welcome to my api!");
});

const port = process.env.PORT || 8000;

app.use(notFound);

const start = async () => {
    try {
        await mongoose
            // @ts-ignore
            .connect(process.env.URL)
            .then(() => console.log("MongoDb connected"));

        server.listen(port, () => {
            console.log("Server is running on port", port);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
