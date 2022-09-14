import { MigrationInterface, QueryRunner } from "typeorm"
import User from "../../app/models/User";
import env from "../../config/environment";

export class UserSeeder1663175287953 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.manager.insert(User, {
            email: env.EMAIL_USER_ROOT,
            password: env.PASS_USER_ROOT,
        });
    }

    public async down(queryRunner: QueryRunner): Promise<void>
    {
        //
    }

}
