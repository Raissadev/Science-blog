import { Request, Response } from "express";
import UserRepository from "../../repositories/UserRepository";
import TypeUser from "../../@types/type-user";

class UserController
{
    constructor()
    {
       // 
    }

    public async index(req: Request, res: Response): Promise<Response>
    {
        const { page } = req.query;

        const all = await UserRepository.all(Number(page));

        return res.json({
            message: "list successfully",
            data: all
        });
    }

    public async store(req: Request, res: Response): Promise<Response>
    {
        const { name, email, password } = req.body;
        const avatar = req.file;

        if (!avatar) return res.status(409).json({ message: "Invalid file!" })

        const user = await UserRepository.create(
            { name, avatar: avatar.path, email, password, type: TypeUser.User }, {}
        );

        if (!user)
            return res.status(409).json({ message: "email exists!" });

        return res.json({
            message: "created successfully",
            data: user,
        });
    }

    public async show(req: Request, res: Response): Promise<Response>
    {
        const { id } = req.params;

        const user = await UserRepository.show(id);

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
        const { name, password } = req.body;
        
        const user = await UserRepository.update(id, { name, password });
    
        if (!user) return res.sendStatus(404);

        return res.json({
            response: "updated successfully"
        });
    }

    public async delete(req: Request, res: Response): Promise<Response>
    {
        const { id } = req.params;

        await UserRepository.delete(id);

        return res.json({ response: "deleted successfully" });
    }
}

export default new UserController;