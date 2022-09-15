import { Request, Response, NextFunction } from "express";
import { check, body, validationResult } from "express-validator";

class CategoryValidate
{
    constructor()
    {
        //
    }

    public validate: any = [
        check("name").isString(),

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

export default new CategoryValidate;