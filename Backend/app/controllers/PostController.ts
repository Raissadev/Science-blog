import { Request, Response } from "express";
import PostRepository from "../repositories/PostRepository";

class PostController
{
    constructor()
    {
        //
    }

    public async index(req: Request, res: Response): Promise<Response>
    {
        const { page } = req.query;

        const all = await PostRepository.all(Number(page));

        return res.json({
            message: "list successfully",
            data: all
        });
    }

    public async store(req: Request, res: Response): Promise<Response>
    {
        console.log(req.body);
        const { title, thumb, content } = req.body;
        const owner_id = req.userId;

        const titleExists = await PostRepository.rp.findOne({ where: { title } });

        if (titleExists)
            return res.status(409).json({ message: "title exists!" });

        const post = PostRepository.rp.create({ owner_id, title, thumb, content });
        await PostRepository.rp.save(post);

        return res.json({
            message: "created successfully",
            data: post,
        });
    }

    public async show(req: Request, res: Response): Promise<Response>
    {
        const { id } = req.params;

        const post = await PostRepository.rp.findOne({ where: { id: id } });

        if (!post)
            return res.status(404).json({ message: "post not exists!" });

        return res.json({
            response: "show successfully",
            data: post
        });
    }

    public async update(req: Request, res: Response): Promise<Response>
    {
        const { id } = req.params;
        const { owner_id, title, thumb, content } = req.body;

        const exists = await PostRepository.rp.findOne({ where: { id } });

        if (!exists) return res.sendStatus(404);

        await PostRepository.rp.update(id, { owner_id, title, thumb, content });

        return res.json({
            response: "updated succesfully",
        });
    }

    public async delete(req: Request, res: Response): Promise<Response>
    {
        const { id } = req.params;

        await PostRepository.rp.delete(id);

        return res.json({
            response: "deleted successfully"
        });
    }
}

export default new PostController;