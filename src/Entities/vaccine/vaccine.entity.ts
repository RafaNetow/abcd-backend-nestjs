import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { HealthCard } from '../healthCard/healthCard.entity';

@Entity()
export class Vaccine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(
    type => HealthCard,
    healthCard => healthCard.vaccines,
    { cascade: true },
  )
  healthCards: HealthCard[];
}
