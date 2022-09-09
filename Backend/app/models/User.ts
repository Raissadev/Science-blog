import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";
import bycript from "bcryptjs";
import TypeUser from "../@types/type-user";
  
@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @Column('text')
    email: string;

    @Column('text')
    password: string;

    @Column('text')
    avatar: string;

    @Column({
        type: 'enum',
        enum: TypeUser,
        default: TypeUser.User,
    })
    type: TypeUser;

    @BeforeInsert()
    @BeforeUpdate()
    private hashPassword(): void
    {
        this.password = bycript.hashSync(this.password, 8);
    }
}

export default User;