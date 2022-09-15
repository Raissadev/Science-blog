import { query, Request, Response } from "express";
import PostRepository from "../repositories/PostRepository";

class PostController
{
    constructor()
    {
        //
    }

    public async index(req: Request, res: Response): Promise<Response>
    {
        const { page, title, short_description, order_by_title, order_by_created } = req.query;

        const all = await PostRepository.all(
            Number(page), { title, short_description, order_by_title, order_by_created }
        );

        return res.json({
            message: "list successfully",
            data: all
        });
    }

    public async store(req: Request, res: Response): Promise<Response>
    {
        const { title, short_description, content, categories } = req.body;
        const thumb = req.file;
        const owner_id = req.userId;

        if (!thumb) return res.status(409).json({ message: "Invalid file!" })

        const post = await PostRepository.create(
            { owner_id, title, short_description, thumb: thumb.path, content },
            categories
        );

        if (!post)
            return res.status(409).json({ message: "title exists!" });

        return res.json({
            message: "created successfully",
            data: post,
        });
    }

    public async show(req: Request, res: Response): Promise<Response>
    {
        const { id } = req.params;

        const post = await PostRepository.show(id);

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
        const { owner_id, title, content } = req.body;

        const post = await PostRepository.update(id, { owner_id, title, content });
    
        if (!post) return res.sendStatus(404);

        return res.json({
            response: "updated succesfully",
        });
    }

    public async delete(req: Request, res: Response): Promise<Response>
    {
        const { id } = req.params;

        await PostRepository.delete(id);

        return res.json({
            response: "deleted successfully"
        });
    }
}

export default new PostController;