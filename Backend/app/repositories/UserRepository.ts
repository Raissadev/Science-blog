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
}

export default new UserRepository;