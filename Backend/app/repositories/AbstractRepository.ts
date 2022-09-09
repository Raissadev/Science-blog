import { ds } from "../../config/data-source";

abstract class AbstractRepository
{
    abstract rp: any;

    public all(): Array<number>
    {
        return this.rp.createQueryBuilder().getMany();
    }
}

export default AbstractRepository;