import { Request, Response, NextFunction } from "express";
import UserRepository from "../../repositories/UserRepository";
import TypeUser from "../../@types/type-user";

async function postPermission(req: Request, res: Response, next: NextFunction): Promise<any>
{
    const id = req.userId;

    if (!id) return res.sendStatus(404);

    const { type } = await UserRepository.rp.findOne({ where: { id: id } });

    if (type !== TypeUser.Root && type !== TypeUser.Creator)
        return res.sendStatus(401);

    return next();
}

export default postPermission;