import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Disease {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;
}
