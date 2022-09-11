import { Request, Response, NextFunction } from "express";
import { check, body, validationResult } from "express-validator";

class UserValidate
{
    constructor()
    {
        //
    }

    public validate: any = [
        check("name").isString(),
        check("email").isString(),
        check("password").isString(),

        (req: Request, res: Response, next: NextFunction) => {(
            !validationResult(req).isEmpty() ?
                res.status(422).json({
                    success: false,
                    data: {
                        message: "Invalid data!",
                    }
                }): next()
        )}
    ];

    public authValidate: any = [
        check("email").isString(),
        check("password").isString(),

        (req: Request, res: Response, next: NextFunction) => {(
            !validationResult(req).isEmpty() ?
                res.status(422).json({
                    success: false,
                    data: {
                        message: "Invalid data!",
                    }
                }): next()
        )}
    ];

    public updateValidate: any = [
        check("name").isString(),
        check("password").isString(),

        (req: Request, res: Response, next: NextFunction) => {(
            !validationResult(req).isEmpty() ?
                res.status(422).json({
                    success: false,
                    data: {
                        message: "Invalid data!",
                    }
                }): next()
        )}
    ];
}

export default new UserValidate;