import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToMany, JoinColumn, CreateDateColumn, UpdateDateColumn, JoinTable, BeforeUpdate } from "typeorm";
import User from "./User";  
import Category from "./Category/Category";  

@Entity('posts')
class Post {
    @PrimaryGeneratedColumn()
    public id: Number;

    @OneToOne(() => User, (user: User) => user.id)
    @JoinColumn({name: "owner_id"})
    public owner_id: User;

    @Column('text')
    public title: string;

    @Column('text')
    public short_description: string;

    @Column('text')
    public content: string;

    @Column('text')
    public thumb: string;

    @CreateDateColumn()
    created_at: Date;
 
    @UpdateDateColumn()
    updated_at: Date;

    @ManyToMany(() => Category)
    @JoinTable()
    categories: Category[]

    @BeforeUpdate()
    updateDates() {
        this.updated_at = new Date()
    }
}

export default Post;