import { Request, Response } from "express";
import Category from "../repositories/Category/CategoryRepository";

class CategoryController
{
    constructor()
    {
        //
    }

    public async index(req: Request, res: Response): Promise<Response>
    {
        const { page, name } = req.query;

        const all = await Category.all(
            Number(page), { name }
        );

        return res.json({
            message: "list successfully",
            data: all
        });
    }

    public async store(req: Request, res: Response): Promise<Response>
    {
        const { name } = req.body;
        const owner_id = req.userId;

        const category = await Category.create({ name });

        if (!category)
            return res.status(409).json({ message: "error" });

        return res.json({
            message: "created successfully",
            data: category,
        });
    }

    public async show(req: Request, res: Response): Promise<Response>
    {
        const { id } = req.params;

        const category = await Category.show(id);

        if (!category)
            return res.status(404).json({ message: "category not exists!" });

        return res.json({
            response: "show successfully",
            data: category
        });
    }

    public async update(req: Request, res: Response): Promise<Response>
    {
        const { id } = req.params;
        const { owner_id, title, content } = req.body;

        const category = await Category.update(id, { owner_id, title, content });
    
        if (!category) return res.sendStatus(404);

        return res.json({
            response: "updated succesfully",
        });
    }

    public async delete(req: Request, res: Response): Promise<Response>
    {
        const { id } = req.params;

        await Category.delete(id);

        return res.json({
            response: "deleted successfully"
        });
    }
}

export default new CategoryController;