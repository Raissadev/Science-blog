import { ds } from "../../../config/data-source";
import AbstractRepository from "../AbstractRepository";
import Category from "../../models/Category/Category";

class CategoryRepository extends AbstractRepository
{
    public rp: any;
    public take: number;

    constructor()
    {
        super()
        this.rp = ds.getRepository(Category)
        this.take = 10;
    }
}

export default new CategoryRepository;