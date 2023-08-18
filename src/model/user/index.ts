import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import Model from "../interface";


@Entity()
export default class User extends Model {
    @Column({
        nullable: false,
        unique: true
    })
    email: string;

    @Column({
        nullable: false
    })
    password: string;

    @Column({
        nullable: false
    })
    name: string;
}