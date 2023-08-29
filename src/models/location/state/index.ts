import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Repository, Unique } from "typeorm";
import Model from "../..";


@Entity()
export default class State extends Model {
    @Column({nullable: false})
    name: string;

    @Column({nullable: false})
    acronym: string;
}