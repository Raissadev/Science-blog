import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreatePostsTable1662918820394 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.createTable(new Table({
            name: 'posts',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                },
                {
                    name: 'owner_id',
                    type: 'uuid',
                    isNullable: true,
                },
                {
                    name: 'title',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'content',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'thumb',
                    type: 'varchar',
                    isNullable: true,
                },
            ],
        }));

        await queryRunner.createForeignKey(
            "posts",
            new TableForeignKey({
                columnNames: ["owner_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.dropTable('posts');
    }

}
