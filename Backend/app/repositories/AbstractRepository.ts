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

    public async create(params: any, relations: any): Promise<any>
    {
        const data = this.rp.create(params);

        await this.rp.save(data);

        return data;
    }

    public async update(id: number|string, params: any): Promise<any>
    {
        const exists = await this.rp.findOne({ where: { id } });

        if (!exists) return false;

        const data = await this.rp.update(id, params);

        return data;
    }

    public async show(id: number|string): Promise<any>
    {
        const data = await this.rp.findOne({ where: { id: id } });

        if (!data) return false;

        return data;
    }

    public async delete(id: number|string): Promise<boolean>
    {
        await this.rp.delete(id);

        return true;
    }
}

export default AbstractRepository;