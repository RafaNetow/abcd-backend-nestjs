import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Disease {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
