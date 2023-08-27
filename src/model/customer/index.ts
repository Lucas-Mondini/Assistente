import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import Model from "..";
import Contact from "../contact";
import User from "../user";
import City from "../location/city";


@Entity()
export default class Employee extends Model {
    @Column({})
    name: string;

    @OneToOne(type => Contact, {cascade: true, nullable: false})
    @JoinColumn()
    contact: Contact;

    @ManyToOne(type => City, {cascade: false, nullable: true})
    city: City;
}