import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Modality {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
