import express from 'express';
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import compression from "compression";
import cors from "cors";
import crypto from "crypto";

import * as MainConfiguration from './Configurations/MainConfiguration.json';
import { ConsoleLog } from './Utils';
import router from "./Routes/Router";

let port = MainConfiguration.port || 3000;

const app = express();

const generateSecret = () => {
    return crypto.randomBytes(64).toString("base64");
};

app.use(session({
    secret: generateSecret(),
    resave: false,
    saveUninitialized: true,
    cookie: { 
        maxAge: 60000
    }
}));

app.use(cors ({ credentials: true, }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/", router());

const server = http.createServer(app);

server.listen(port, async () => {
    ConsoleLog("License Validator API available on port " + port + "!");
})