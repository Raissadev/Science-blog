import { ds } from "../../config/data-source";
import AbstractRepository from "./AbstractRepository";
import Post from "../models/Post";
import CategoryPostRepository from "./Category/CategoryPostRepository";

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

    public async all(page: any): Promise<Array<number>>
    {
        return this.rp.find({
            skip: ((page || 0) * this.take),
            take: this.take,
            relations: ["categories"],
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