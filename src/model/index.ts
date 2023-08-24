import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default abstract class Model {
    @PrimaryGeneratedColumn()
    id: number;
}