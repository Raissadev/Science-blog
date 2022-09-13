import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateCategoriesTable1663006126610 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.createTable(new Table({
            name: 'categories',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()",
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.dropTable('categories');
    }

}
