import { Entity, Column, ManyToOne, OneToOne, JoinTable, OneToMany, PrimaryGeneratedColumn, JoinColumn } from "typeorm"
import { Person } from '../person/person.entity'


@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Person, { cascade: true })
    @JoinColumn()
    profile: Person;

}
