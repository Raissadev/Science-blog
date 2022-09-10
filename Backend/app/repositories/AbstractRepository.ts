abstract class AbstractRepository
{
    abstract rp: any;
    abstract take: number;

    public async all(page: any): Promise<Array<number>>
    {
        return this.rp.find({
            skip: ((page || 0) * this.take),
            take: this.take,
        });
    }
}

export default AbstractRepository;