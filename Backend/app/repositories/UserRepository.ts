import { ds } from "../../config/data-source";
import User from "../models/User";
import AbstractRepository from "./AbstractRepository";

class UserRepository extends AbstractRepository
{
    public rp: any;

    constructor()
    {
        super();
        this.rp = ds.getRepository(User);
    }
}

export default new UserRepository();