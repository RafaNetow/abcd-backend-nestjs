import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Modality {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;
}
