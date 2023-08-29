import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Repository, Unique } from "typeorm";
import Model from "..";
import Employee from "../employee";
import { AppDataSource } from "../../data-source";


@Entity()
export default class Contact extends Model {
    @Column({})
    email: string;

    @Column({})
    phone: string;

    @Column({nullable: true})
    whatsapp: string;
    
}