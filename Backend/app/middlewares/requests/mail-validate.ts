import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";

class MailValidate
{
    constructor()
    {
        //
    }

    public validate: any = [
        check("name").isString(),
        check("email").isString().isEmail(),
        check("context").isString(),

        (req: Request, res: Response, next: NextFunction) => {(
            !validationResult(req).isEmpty() ?
                res.status(422).json({
                    success: false,
                    data: {
                        message: "Invalid data!"
                    }
                }):
            next()
        )}
    ]

}

export default new MailValidate;