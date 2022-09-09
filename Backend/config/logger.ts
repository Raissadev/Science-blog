import fs from "fs";
import winston, { http, info } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

import env from "./environment";
import FormatDate from "../app/utils/FormatDate"

const enviroment = env.NODE_ENV || 'production';
const log_path = env.LOG_DIR || 'log';
const log_level = env.LOG_LEVEL || 'info';

if (!fs.existsSync(log_path)) {
    fs.mkdirSync(log_path);
}

const defaultFormat = winston.format.printf(
    (info) => {
        let message = info.message;

        if (info.req) message = `${info.message} [${JSON.stringify(info.httpRequest), null, 2}]`;

        return `${FormatDate(new Date())} | PID: [${process.pid}] | ${info.level}: ${message}}`;
    }
)

const defaultLog = winston.createLogger({
    format: winston.format.metadata({ 
        fillExcept: ["message", "level", "timestamp", "label"]
    }),
    transports: [
        new DailyRotateFile({
            filename: `Blog-%DATE%.log`,
            format: winston.format.combine(winston.format.json(), defaultFormat),
            dirname: log_path,
            datePattern: "YYYY-MM-DD",
            level: log_level,
            zippedArchive: true,
            maxSize: "28m",
            maxFiles: "14d"
        })
    ]
});

const expressLog = {
    transports: [
        new winston.transports.DailyRotateFile({
            filename: `Blog-%DATE%.log`,
            format: winston.format.combine(winston.format.json(), defaultFormat),
            dirname: log_path,
            datePattern: "YYYY-MM-DD",
            level: log_level,
            zippedArchive: true,
            maxSize: "28m",
            maxFiles: "14d"
        }),
    ],
    statusLevels: false,
    level: (req: any, res: any) =>
    {
        let level: string = "";
        if(res.statusCode >= 100) level = "debug";
        if(res.statusCode >= 400) level = "warn";
        if(res.statusCode >= 500) level = "error";

        return level;
    },
    metaField: null,
    responseField: null,
    requestWhiteList: ["headers", "query"],
    responseWhiteList: ["body"],
    dynamicMeta: (req: any, res: any) =>
    {
        const httpRequest: any = {};
        const meta: any = {};
        if (req) {
            meta.httpRequest = httpRequest;
            httpRequest.requestMethod = req.method;
            httpRequest.requestUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
            httpRequest.protocol = `HTTP/${req.httpVersion}`;
            httpRequest.headers = req.headers;
            httpRequest.body = (req.body) ? req.body : "undefined";
            httpRequest.params = (req.params) ? req.params : "undefined";
            httpRequest.query = (req.query) ? req.query : "undefined";
            httpRequest.remoteIp = req.ip.indexOf(":") >= 0 ? req.ip.substring(req.ip.lastIndexOf(":") + 1) : req.ip;
            httpRequest.requestSize = req.socket.bytesRead;
            httpRequest.userAgent = req.get("User-Agente");
            httpRequest.referrer = req.get("Referrer");
        }

        return meta;
    }
}

if (enviroment !== 'production') {
    const transport_console: any = new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(),
            defaultFormat
        ),
        level: log_level
    });

    expressLog.transports.push(transport_console);
    defaultLog.add(transport_console);
}

export { defaultLog, expressLog };