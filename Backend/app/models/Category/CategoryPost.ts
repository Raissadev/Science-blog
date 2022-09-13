import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import Post from "../Post";
import Category from "./Category";

@Entity('category_post')
class CategoryPost {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column('int')
    public category_id: number;

    @Column('int')
    public post_id: number;

    @CreateDateColumn()
    created_at: Date;
 
    @UpdateDateColumn()
    updated_at: Date;
}

export default CategoryPost;