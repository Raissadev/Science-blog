import { MigrationInterface, QueryRunner } from "typeorm"
import Category from "../../app/models/Category/Category";

export class CategorySeeder1663175251045 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.manager.insert(Category, [
            {
                name: 'Nanotechnology',
            },
            {
                name: 'Physics',
            },
            {
                name: 'Earth',
            },
            {
                name: 'Astronomy & Space',
            },
            {
                name: 'Chemistry',
            },
            {
                name: 'Biology',
            },
            {
                name: ' Medicine',
            },
            {
                name: ' Technology',
            },
            {
                name: 'Other Sciences',
            },
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void>
    {
        //
    }

}
