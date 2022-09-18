import { MigrationInterface, QueryRunner } from "typeorm"
import Post from "../../app/models/Post";

export class PostSeeder1663175399014 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.manager.insert(Post, {
            title: "Hello World!",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus aliquet nulla et fringilla. Integer finibus lacus vitae tortor vestibulum, dignissim interdum sapien malesuada. Nam facilisis sodales ipsum. Phasellus pulvinar ipsum sit amet mi lacinia egestas. Nulla facilisi. Praesent a neque purus. Phasellus id malesuada libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum sed justo at leo sodales volutpat a eu ligula. Sed venenatis egestas nisl, nec semper arcu. Aenean sed finibus metus. Nullam viverra metus sed ipsum hendrerit, sit amet congue elit mattis. Curabitur dui felis, gravida eu ligula vel, accumsan molestie mauris. Duis commodo elementum libero, sit amet fringilla leo molestie eu. Nulla luctus vehicula dolor.",
            short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus aliquet nulla et fringilla. Integer finibus lacus vitae tortor vestibulum, dignissim interdum sapien malesuada. Nam facilisis sodales ipsum. Phasellus pulvinar ipsum sit amet mi lacinia egestas. Nulla facilisi. Praesent a neque purus. Phasellus id malesuada libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum sed justo at leo sodales volutpat a eu ligula. Sed venenatis egestas nisl, nec semper arcu. Aenean sed finibus metus. Nullam viverra metus sed ipsum hendrerit, sit amet congue elit mattis. Curabitur dui felis, gravida eu ligula vel, accumsan molestie mauris. Duis commodo elementum libero, sit amet fringilla leo molestie eu. Nulla luctus vehicula dolor.",
            thumb: "public/storage/root.jpg",
        });
    }

    public async down(queryRunner: QueryRunner): Promise<void>
    {
        //
    }

}
