import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
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
}
