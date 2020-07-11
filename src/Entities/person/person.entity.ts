import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Student } from '../student/student.entity';

@Entity()
export class Person {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  placeOfBirth: string;

  @Column()
  birthDay: Date;

  @Column()
  gender: boolean;

  @Column()
  nacionality: string;

  @Column()
  address: string;

  @Column()
  phone: number;

  @Column()
  kindOfBlood: string;

  @Column()
  photo: string;

  @Column()
  email: string;

  @Column()
  rne: number;

  @Column()
  workPlace: string;

  @Column()
  ownHouse: string;

  @ManyToMany(
    type => Student,
    student => student.references,
    { cascade: true },
  )
  students: Student[];
}
