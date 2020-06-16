import {
  Column,
  OneToOne,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { Person } from '../person/person.entity';

@Entity()
export class HealthCard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tratamientos: string;

  @OneToOne(type => Person, { cascade: true })
  @JoinColumn()
  person: Person;
}
