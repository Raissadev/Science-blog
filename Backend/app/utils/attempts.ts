import { Request, Response, NextFunction } from "express";
import { RateLimiterMemory } from "rate-limiter-flexible";

let i: number = 1;

export default function attempts(req: Request, res: Response, next: NextFunction): any
{
    const limit: RateLimiterMemory = new RateLimiterMemory({
        points: 5,
        duration: 15 * 60,
        blockDuration: 15 * 60
    });

    limit.consume(req.ip, ++i).then((rateLimiterRes: any) => {
        let date: any = new Date(Date.now()).getTime() + rateLimiterRes.msBeforeNext;

        res.set('X-RateLimit-Remaining', rateLimiterRes.remainingPoints);
        res.set('X-RateLimit-Reset', date);
        next();
    }).catch((rateLimiterRes: any) => {
        let date: any = new Date(Date.now()).getTime() + rateLimiterRes.msBeforeNext;

        res.set('X-RateLimit-Remaining', rateLimiterRes.remainingPoints);
        res.set('X-RateLimit-Reset', date);
        
        return res.status(429).json({
            message: 'Too many requests'
        });
    });
}