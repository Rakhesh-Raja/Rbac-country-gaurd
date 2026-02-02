import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Country } from '../common/enums/country.enum';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    enum: Country,
  })
  country: Country;
}
