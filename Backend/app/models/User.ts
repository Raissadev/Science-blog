import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";
import bycript from "bcryptjs";
import TypeUser from "../@types/type-user";
  
@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column('text')
    public name: string;

    @Column('text')
    public email: string;

    @Column('text')
    public password: string;

    @Column('text')
    public avatar: string;

    @Column({
        type: 'enum',
        enum: TypeUser,
        default: TypeUser.User,

    })
    public type: TypeUser;

    @BeforeInsert()
    @BeforeUpdate()
    private hashPassword(): void
    {
        this.password = bycript.hashSync(this.password, 8);
    }
}

export default User;