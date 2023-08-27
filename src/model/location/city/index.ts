import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Repository, Unique } from "typeorm";
import Model from "../..";
import State from "../state";


@Entity()
export default class City extends Model {
    @Column({nullable: false})
    name: string;

    @ManyToOne(type => State, {cascade: true, nullable: false})
    state: State;
    
}