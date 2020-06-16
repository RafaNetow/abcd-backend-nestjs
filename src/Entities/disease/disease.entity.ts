import { Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Disease {
    @PrimaryGeneratedColumn()
    id: number;

    name: String;

}
