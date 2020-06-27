import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Vaccine {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;
}
