import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Institute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
