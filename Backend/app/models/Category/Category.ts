import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn } from "typeorm";
import Post from "../Post";

@Entity('categories')
class Category {
    @PrimaryGeneratedColumn()
    public id: Number;

    @Column('text')
    public name: string;

    @CreateDateColumn()
    created_at: Date;
 
    @UpdateDateColumn()
    updated_at: Date;

    @ManyToMany(() => Post)
    @JoinTable()
    posts: Post[]
}

export default Category;