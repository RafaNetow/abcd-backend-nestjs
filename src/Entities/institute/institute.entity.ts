import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Institute {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;
}
