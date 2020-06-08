import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  placeOfBirth: string;
 
  @Column()
  birthDay: string;

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
  Rne: number;

}
