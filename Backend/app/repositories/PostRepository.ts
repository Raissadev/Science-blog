import { ds } from "../../config/data-source";
import AbstractRepository from "./AbstractRepository";
import Post from "../models/Post";

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
}

export default new PostRepository;