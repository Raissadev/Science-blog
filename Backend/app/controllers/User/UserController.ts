import { Request, Response } from "express";
import UserRepository from "../../repositories/UserRepository";

class UserController
{
    constructor()
    {
       // 
    }

    public async index(req: Request, res: Response): Promise<Response>
    {
        const all = await UserRepository.all();

        return res.json({
            message: "list successfully",
            data: all
        });
    }

    public async store(req: Request, res: Response): Promise<Response>
    {
        const { name, email, password } = req.body;

        const userExists = await UserRepository.rp.findOne({ where: { email } });

        if (userExists)
            return res.status(409).json({ message: "user exists!" })

        const user = UserRepository.rp.create({ name, email, password });
        await UserRepository.rp.save(user);

        return res.json({
            message: "created successfully",
            data: user,
        });
    }

    public async show(req: Request, res: Response): Promise<Response>
    {
        const { id } = req.params;

        const user = await UserRepository.rp.findOne({ where: { id: id } });

        if (!user)
            return res.status(404).json({ message: "user not exists" });

        return res.json({
            response: "show successfully",
            data: user,
        });
    }

    public async update(req: Request, res: Response): Promise<Response>
    {
        const { id } = req.params;
        const { name, avatar, password } = req.body;
        
        const exists = await UserRepository.rp.findOne({ where: { id } });

        if (!exists) return res.sendStatus(404);

        await UserRepository.rp.update(id, { name, avatar, password });

        return res.json({
            response: "updated successfully"
        });
    }

    public async delete(req: Request, res: Response): Promise<Response>
    {
        const { id } = req.params;

        await UserRepository.rp.delete(id);

        return res.json({ response: "deleted successfully" });
    }
}

export default new UserController;