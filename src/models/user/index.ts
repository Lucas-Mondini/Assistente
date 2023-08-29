import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import Model from "..";


@Entity()
export default class User extends Model {
    @Column({
        nullable: false,
        unique: true
    })
    email: string;

    @Column({
        nullable: false,
        select: false
    })
    password: string;

    @Column({
        nullable: false
    })
    name: string;

    constructor(email: string = "", password: string = "", name: string = "") {
        super();
        this.email = email;
        this.password = password;
        this.name = name;
    }
}