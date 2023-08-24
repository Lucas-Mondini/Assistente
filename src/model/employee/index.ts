import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import Model from "..";
import Contact from "../contact";
import User from "../user";


@Entity()
export default class Employee extends Model {
    @Column({})
    name: string;

    @OneToOne(type => Contact, {cascade: true, nullable: false})
    @JoinColumn()
    contact: Contact;

    @OneToOne(type => User, {nullable: false})
    @JoinColumn()
    user: User;
}