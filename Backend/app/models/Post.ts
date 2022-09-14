import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToMany, JoinColumn, CreateDateColumn, UpdateDateColumn, JoinTable, BeforeUpdate, ManyToOne } from "typeorm";
import User from "./User";  
import Category from "./Category/Category";  
import CategoryPost from "./Category/CategoryPost";  

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

    @ManyToMany((type) => Category)
    @JoinTable({
        name: "category_post",
        joinColumn: {
            name: "post_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "category_id",
            referencedColumnName: "id"
        }
    })
    categories: Category[]

    @BeforeUpdate()
    updateDates() {
        this.updated_at = new Date()
    }
}

export default Post;