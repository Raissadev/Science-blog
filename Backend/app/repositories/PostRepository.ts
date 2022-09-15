import { ds } from "../../config/data-source";
import AbstractRepository from "./AbstractRepository";
import Post from "../models/Post";
import CategoryPostRepository from "./Category/CategoryPostRepository";
import { Like } from "typeorm";

class PostRepository extends AbstractRepository
{
    public rp: any;
    public take: number;

    constructor()
    {
        super()
        this.rp = ds.getRepository(Post)
        this.take = 10;
    }

    public async all(page: any, search: any = null): Promise<Array<number>>
    {
        return await this.rp.find({
            skip: ((page || 0) * this.take),
            take: this.take,
            relations: ["categories"],
            where: {
                title: Like(`%${search?.title || ''}%`),
                short_description: Like(`%${search?.short_description || ''}%`),
            },
            order: {
                title: search?.order_by_title,
                created_at: search?.order_by_created,
            }
        });
    }

    public async create(params: any, relations: any): Promise<any>
    {
        const titleExists = await this.rp.findOne({ where: { title: params.title } });

        if (titleExists) return false;

        const data = this.rp.create(params);

        await this.rp.save(data);

        await CategoryPostRepository.createManyWithRelation(
            relations, data.id
        );

        return data;
    }
}

export default new PostRepository;