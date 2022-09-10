import { ds } from "../../config/data-source";
import User from "../models/User";
import AbstractRepository from "./AbstractRepository";

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

export default new UserRepository();