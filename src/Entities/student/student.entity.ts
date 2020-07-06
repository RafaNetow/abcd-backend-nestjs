
import {
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
>>>>>>> working on first step to service person_student
import { Person } from '../person/person.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @OneToOne(type => Person, { cascade: true })
  @JoinColumn()
  person: Person;

  @ManyToMany(
    type => Person,
    person => person.students,
  )
  @JoinTable()
  references: Person[];
}
