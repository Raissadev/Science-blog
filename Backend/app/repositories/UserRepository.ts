import { ds } from "../../config/data-source";
import AbstractRepository from "./AbstractRepository";
import User from "../models/User";

class UserRepository extends AbstractRepository
{
    public rp: any;
    public take: number;

    constructor()
    {
        super();
        this.rp = ds.getRepository(User);
        this.take = 10;
    }

    public async create(params: any, relations: any): Promise<any>
    {
        const emailExists = await this.rp.findOne({ where: { email: params.email } });

        if (emailExists) return "exists";

        const data = this.rp.create(params);

        await this.rp.save(data);

        return data;
    }
}

export default new UserRepository;