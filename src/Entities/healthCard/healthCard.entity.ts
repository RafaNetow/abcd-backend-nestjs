import {
  Column,
  OneToOne,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToMany,
  JoinTable
} from 'typeorm';
import { Person } from '../person/person.entity';
import { Vaccine } from '../vaccine/vaccine.entity'

@Entity()
export class HealthCard {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  tratamientos: string;

  @OneToOne(type => Person, { cascade: true })
  @JoinColumn()
  person: Person;

  @ManyToMany(type => Vaccine, vaccine => vaccine.healthCards)
  @JoinTable()
  vaccines: Vaccine[];

}
