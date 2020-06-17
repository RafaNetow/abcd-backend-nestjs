import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity()
export class Vaccine {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}