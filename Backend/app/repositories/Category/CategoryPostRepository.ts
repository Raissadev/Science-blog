import { ds } from "../../../config/data-source";
import AbstractRepository from "../AbstractRepository";
import CategoryPost from "../../models/Category/CategoryPost";

class CategoryPostRepository extends AbstractRepository
{
    public rp: any;
    public take: number;

    constructor()
    {
        super()
        this.rp = ds.getRepository(CategoryPost)
        this.take = 10;
    }

    public async createManyWithRelation(data: Array<number>, relation: number): Promise<any>
    {
        const block: Array<any> = [];
        data.map(
            (value) => block.push({ category_id: Number(value), post_id: relation })
        );

        this.rp.insert(block);
    }
}

export default new CategoryPostRepository;