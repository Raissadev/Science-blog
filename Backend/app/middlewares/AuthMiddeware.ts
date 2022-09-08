import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import TokenPayload from "../@types/token-payload";
import env from "../../config/environment";

export default function authMiddleware(req: Request, res: Response, next: NextFunction): any
{
    const { authorization } = req.headers;

    if (!authorization)
        return res.sendStatus(404);

    const token: string = authorization.replace('Bearer', '').trim();

    try { 
        const data = jwt.verify(token, env.JWT_SECRET_PASSWORD);

        const { id } = data as TokenPayload;

        req.userId = id;

        return next();
    } catch {
        return res.sendStatus(404);
    }
}