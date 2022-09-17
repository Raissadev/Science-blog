import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import socketio from "socket.io";
import env from "../config/environment";
import "../config/data-source";

import path, { dirname, resolve } from "path";
import { defaultLog as log, expressLog } from "../config/logger";
import { logger } from "express-winston";
import { version } from "./version";
import Proc from "../config/proc";
import { pagination } from 'typeorm-pagination'

import routes from "./routes/index";

process.title = "Science-BACKEND";

const main: any = () => {
    const app = express();
    const httpServer = http.createServer(app);

    const staticPath = path.normalize(path.join(__dirname, '../../Frontend/public'));
    const buildPath = path.normalize(path.join(__dirname, '../../Frontend/build'));

    const serverPort = process.env.PORT || env.SERVER_PORT;
    const io = new socketio.Server(httpServer).on('connection', () => console.log("connected"));

    app.use(express.json());
    app.use(bodyParser.json());
    app.use(pagination);
    app.use(cors());
    app.use("/api/v1", routes);

    app.use(express.static(buildPath));
    app.use(express.static(staticPath));

    app.use("/static", express.static(buildPath));
    app.use("/public", express.static(staticPath));
    app.use("/api/v1/public", express.static(path.join(__dirname, '..', 'public')));

    app.use("*", express.static(buildPath));

    app.use(logger(expressLog));
    app.disable('x-powred-by');

    const server: any = app.listen(serverPort, () => console.log(`Its running in port ${serverPort}!`));

    Proc.start = server;
    Proc.deathEvents();
}

Proc.vertional();
main();