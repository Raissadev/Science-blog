import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import User from "./User";  

@Entity('posts')
class Post {
    @PrimaryGeneratedColumn()
    public id: string;

    @OneToOne(() => User, (user: User) => user.id)
    @JoinColumn({name: "owner_id"})
    public owner_id: User;

    @Column('text')
    public title: string;

    @Column('text')
    public content: string;

    @Column('text')
    public thumb: string;
}

export default Post;