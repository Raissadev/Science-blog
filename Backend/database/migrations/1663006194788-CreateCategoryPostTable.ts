import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateCategoryPostTable1663006194788 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.createTable(new Table({
            name: 'category_post',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                },
                {
                    name: 'post_id',
                    type: 'int',
                    isNullable: true,
                },
                {
                    name: 'category_id',
                    type: 'int',
                    isNullable: true,
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

        await queryRunner.createForeignKey(
            "category_post",
            new TableForeignKey({
                columnNames: ["post_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "posts",
                onDelete: "CASCADE",
            })
        );
        await queryRunner.createForeignKey(
            "category_post",
            new TableForeignKey({
                columnNames: ["category_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "categories",
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.dropTable('category_post');
    }

}
