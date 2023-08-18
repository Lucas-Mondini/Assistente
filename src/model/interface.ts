import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Model {
    @PrimaryGeneratedColumn()
    id: number;
}