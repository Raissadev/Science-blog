import { Request, Response } from "express";
import UserRepository from "../../repositories/UserRepository";
import jwt from "jsonwebtoken";
import bycript from "bcryptjs";
import env from "../../../config/environment";

class AuthController
{
    constructor()
    {
        //
    }

    public async authenticate(req: Request, res: Response): Promise<Response>
    {
        const { email, password } = req.body;

        const user = await UserRepository.rp.findOne({ where: { email } });

        if (!user)
            return res.sendStatus(404);

        const isValidPassword = await bycript.compare(password, user.password);

        if (!isValidPassword)
            return res.sendStatus(401);

        const token = jwt.sign(
            { id: user.id }, env.JWT_SECRET_PASSWORD, { expiresIn: '1d' }
        );

        delete user.password;

        return res.json({ user, token });
    }
}

export default new AuthController;